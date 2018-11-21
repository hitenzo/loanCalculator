
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs"
import { RequestsProvider } from './request-provider';

@Injectable({
    providedIn: 'root',
})
export class LoanService {
    constructor(private requests: RequestsProvider) { }

    

    CreateBet(arg1: any): Observable<any> {
        return new Observable<any>((observer) => {
            let request = this.requests.post('/controller/method', arg1);
            
            request.subscribe(
                (data: any) => {
                    let return_data = data;
                    observer.next(return_data);
                },
                (err) => {
                    observer.next(err)
                }
            );
        });
    } 

 

}