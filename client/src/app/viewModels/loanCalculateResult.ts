
export class LoanCalculateResult {
    loanCost: number; 
    loanRates: number[]; 
    
    constructor(dataSource: string) {
        let parsed = JSON.parse(dataSource);

        this.loanCost = parsed.loanCost; 
        this.loanRates = parsed.loanRates; 
        
    }
}