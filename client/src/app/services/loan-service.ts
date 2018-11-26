
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs"
import { RequestsProvider } from './request-provider';
import { LoanCalculateRequest } from '../viewModels/loanCalculateRequest';
import { LoanCalculateResult } from '../viewModels/loanCalculateResult';

@Injectable({
    providedIn: 'root',
})
export class LoanService {
    constructor(private requests: RequestsProvider) { }

    

    CalculateLoan(arg1: LoanCalculateRequest): Observable<LoanCalculateResult> {
        return new Observable<LoanCalculateResult>((observer) => {
            let request = this.requests.post('/api/Loan/CalcDecreaseMonthLoan', arg1);
            
            request.subscribe(
                (data: LoanCalculateResult) => {
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