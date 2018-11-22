
export class LoanCalculateRequest {
    amount: number; 
    durationInYears: number; 
    
    constructor(dataSource: string) {
        let parsed = JSON.parse(dataSource);

        this.amount = parsed.amount; 
        this.durationInYears = parsed.durationInYears; 
        
    }
}