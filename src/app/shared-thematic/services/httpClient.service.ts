import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toLonLat } from 'ol/proj';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  private http = inject(HttpClient);
  private url : string = "https://data.geopf.fr/wfs/ows";
  private options : object = {
    "service" : "WFS",
    "version" : "2.0.0",
    "request" : "GetFeature",
    "srsName" : "CRS:84",
    "outputFormat" : "application/json"
}

setOption(name : string, value : string) {
  this.options = Object.assign(this.options, {[name] : value});
};

getIntersectsFilter(geomName : string, features : Array<any>) {

  var getPolygonString = function(coords:Array<any>) {
    var str = "";
    for(var i = 0; i < coords.length; i++) {
      str += "(";
      for(var j = 0; j < coords[i].length; j++) {
        str += coords[i][j][1] + " " + coords[i][j][0] + ", ";
      }
      str += coords[i][0][1] + " " + coords[i][0][0] + "), ";
    }
    str = str.replace(/, $/, "");
    return str;
  }

  var spatialFilter = "";
  if(features.length) {
    var polygons = [];
    var coordinates = [];
    var lonLatCoords = [];

    for(var i=0; i < features.length; i++) {
      for(var j = 0; j < features[i].getGeometry().getCoordinates().length; j++) {
        for(var k = 0; k < features[i].getGeometry().getCoordinates()[j].length; k++) {
          lonLatCoords.push(toLonLat(features[i].getGeometry().getCoordinates()[j][k]));
        }
        coordinates.push(lonLatCoords);
        lonLatCoords = [];
      }
      polygons.push(coordinates);
      coordinates = [];
    }

    spatialFilter += "INTERSECTS(" + geomName + ", MULTIPOLYGON((";
    for(var i = 0; i < polygons.length; i++) {
      spatialFilter += getPolygonString(polygons[i]) + "), (";
    }
    spatialFilter = spatialFilter.replace(/, \($/, "");
    spatialFilter += "))"

    return spatialFilter;
  }
  return;
  // else {
  //   var coordinates = [];
  //   var lonLatCoords = [];
  //   for(var i = 0; i < features[0].getGeometry().getCoordinates().length; i++) {
  //     for(var j = 0; j < features[0].getGeometry().getCoordinates()[i].length; j++) {
  //       lonLatCoords.push(toLonLat(features[0].getGeometry().getCoordinates()[i][j]));
  //     }
  //     coordinates.push(lonLatCoords);
  //     lonLatCoords = [];
  //   }

  //   spatialFilter += "INTERSECTS(" + geomName + ", POLYGON(";
  //   spatialFilter += getPolygonString(coordinates);
  //   spatialFilter+= "))";

  //     return spatialFilter;
  // }


  
};

sendRequest(callback : Function) {
  var requestUrl = this.url + "?";

  for(const [key, value] of Object.entries(this.options)) {
      requestUrl += key + "=" + value + "&";
  }

  requestUrl = requestUrl.replace(/&$/, "");

  this.http.get(requestUrl).subscribe((resp) => callback(resp));
};
}