import Control from 'ol/control/Control.js';
import { unByKey } from 'ol/Observable';

export class parcelSelectControl extends Control {
  
    constructor(opt_options:any) {
      const options = opt_options || {};

      let eventKey:any = null;
  
      const button = document.createElement('button');
      button.innerHTML = 'P';
      button.type = "button";
      button.name = "parcelSelect";
      button.title = "Sélectionner des parcelles";
  
      const element = document.createElement('div');
      element.className = 'parcel-select ol-button ol-toggle ol-unselectable ol-control';
      element.appendChild(button);

      const handleParcelSelect = function() {
        if(element.classList.contains('ol-active')) {
          eventKey = options.map.on('click', (e:any) => options.parcelSelectService.getParcel(e.coordinate));
          let ctrl = options.editBar.getControls();
          ctrl[0].setActive(false);
          ctrl[2].setActive(false);
          ctrl[3].setActive(false);
        } else {
          unByKey(eventKey);
        }
      }
      
      super({
        element: element
      });
  
      button.addEventListener('click', function() {element.classList.toggle("ol-active"); handleParcelSelect()}, false);
    };

    setActive(active:boolean) {
      if( (!active && this.element.classList.contains('ol-active')) || (active && !this.element.classList.contains('ol-active'))) {
        //@ts-ignore
        this.element.children[0].click();
      } 
    };
  };

