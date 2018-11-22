
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs"
import { RequestsProvider } from './request-provider';
import { LoanCalculateRequest } from '../viewModels/loanCalculateRequest';

@Injectable({
    providedIn: 'root',
})
export class LoanService {
    constructor(private requests: RequestsProvider) { }

    

    CalculateLoan(arg1: LoanCalculateRequest): Observable<any> {
        return new Observable<any>((observer) => {
            let request = this.requests.post('/api/Loan/CalculateLoanPlan', arg1);
            
            request.subscribe(
                (data: number) => {
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