import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs"
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/shareReplay'

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class RequestsProvider {
    constructor(private http: HttpClient) { }


    get<T>(url): Observable<any> {
        return this.http.get<T>(environment.apiUrl + url);
    }

    post<T>(url, postObject): Observable<T> {
        return this.http.post<T>(environment.apiUrl + url, postObject);
    }

    
    post_simple(url, postObject): Observable<any> {
        return this.http.post(environment.apiUrl + url, postObject);
    }


}