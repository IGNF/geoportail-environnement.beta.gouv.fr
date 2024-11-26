import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Call } from '@angular/compiler';
import { Foret } from '../models/foret.model';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    apiUrl = environment.apiUrl;
    localstorageTokenItem = 'GPE@token';
    localstorageRefreshTokenItem = 'GPE@refresh_token';

    _token = localStorage.getItem(this.localstorageTokenItem);
    _refreshToken = localStorage.getItem(this.localstorageRefreshTokenItem);

    constructor(private http: HttpClient) { }

    getMe(): Observable<any>{
        // this._send('get', `${this.apiUrl}/me`, {}, callback, false);

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this._token}`
        });
        return this.http.get<any>(`${this.apiUrl}/me`, { headers: headers });
    }

    getForets(): Observable<Foret[]> {
        // this._send('get', `${this.apiUrl}/forets`, {}, callback, true);
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this._token}`
        });
        return this.http.get<any[]>(`${this.apiUrl}/forets`, { headers: headers });
    }

    getForetById(id: number, callback: any) {
        this._send('get', `${this.apiUrl}/forets/${id}`, {}, callback, true);
        // return this.http.get<any[]>(`${this.apiUrl}/forets/${id}`);
    }

    postForet(foret: any, callback: any) {
        this._send('post', `${this.apiUrl}/forets`, foret, callback, true);
        // return this.http.post<any>(`${this.apiUrl}/forets`, foret);
    }

    putForet(id: number, foret: any, callback: any) {
        this._send('put', `${this.apiUrl}/forets/${id}`, foret, callback, true);
        // return this.http.put<any>(`${this.apiUrl}/forets/${id}`, foret);
    }

    deleteForet(id: number, callback: any) {
        this._send('delete', `${this.apiUrl}/forets/${id}`, {}, callback, true);
        // return this.http.delete<any>(`${this.apiUrl}/forets/${id}`);
    }

    

    private refreshToken() {
        if (!this._refreshToken) {
            this._refreshToken = localStorage.getItem(this.localstorageRefreshTokenItem);
        }
        if (!this._refreshToken) {
            // pas connecté, renvoyer vers la page de login 
            window.open(environment.loginUrl, "_blank");
        }
        return this.http.post<any>(`${this.apiUrl}/token/refresh`, { refresh_token: this._refreshToken})
            .subscribe( request => {
                const resp = JSON.parse(request.responseText);
                    localStorage.setItem(this.localstorageTokenItem, resp.token)
                    this._token = resp.token;
            })
        ;
    }

    private _send(method: string, url: string, params: any, callback: any, refresh: boolean) {
        // if (refresh !== false) {
        //     this.refreshToken((connected: boolean, request: any) => {
        //         if (connected) {
        //             this._send(method, url, params, callback, false)
        //         }
        //     })
        //     return;
        // }

        // Send request
        // params = params || {};
        method = method.toUpperCase();
        callback = callback || function(){};
        let urlObject = new URL(url);

        let data;
        if (method === 'GET') {
          for (let o in params) {
            urlObject.searchParams.set(o, params[o]);
          }
        } else {
          if (!(params instanceof FormData)) {
            data = JSON.stringify(params);
          } else {
            data = params;
          }
        }

        const request = new XMLHttpRequest();
        request.open(method, urlObject.toString());
        if (!(params instanceof FormData)) {
            request.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');
        }
        request.setRequestHeader('Authorization', 'Bearer ' + this._token);
        request.onload = () => {
            switch (request.status) {
                case 0: {
                    callback({ error: true, status: request.status, statusText: request.statusText, xhttp: request });
                    break;
                }
                case 200:
                case 201:
                case 204:
                case 206: {
                    let resp;
                    try {
                        if (request.responseText) resp = JSON.parse(request.responseText);
                        else resp = '';
                    } catch(e) {
                        callback({ error: true, status: 418, statusText: 'Invalid json message received', xhttp: request });
                        return;
                    }
                    callback(resp);
                    break;
                }
                case 401: {
                    callback({ error: true, status: request.status, statusText: request.statusText, xhttp: request });
                    // this.dispatchEvent({ type: 'disconnect' });
                    break;
                }
                default: {
                    callback({ error: true, status: request.status, statusText: request.statusText, xhttp: request });
                    break;
                }
            }
        }
        request.send(data);
    }

    private refreshToken2(callback?: any) {
        if (!this._refreshToken) {
            this._refreshToken = localStorage.getItem(this.localstorageRefreshTokenItem);
        }

        if (!this._refreshToken) {
            // pas connecté, renvoyer vers la page de login 
            window.open(environment.loginUrl, "_blank");
        }

        const request = new XMLHttpRequest();
        request.open('POST', `${this.apiUrl}/token/refresh`);
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        request.onerror =
        request.onload = () => {
            if (request.status === 200) {
                try {
                    const resp = JSON.parse(request.responseText);
                    localStorage.setItem(this.localstorageTokenItem, resp.token)
                    this._token = resp.token;
                    // this.setToken(resp.token);
                } catch (e) { /* ok */ }
                if (callback) callback(true);
            }
        }
        request.send(JSON.stringify({
            refresh_token: this._refreshToken
        }));

        // this.http.post<any>(`${this.apiUrl}/token/refresh`, {
        //   body: JSON.stringify({[this.localstorageRefreshTokenItem]: this._refreshToken})
        // }).subscribe(data => {
        //   console.log(data)
        // });
    }

}
