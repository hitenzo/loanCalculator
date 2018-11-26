import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { LoanService } from '../../services/loan-service';
import { LoanCalculateResult } from '../../viewModels/loanCalculateResult';

@Component({
  // selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent implements OnInit {

  public LoanAmount: string;
  public LoanDurationInYears: string;
  public CalculatedLoan: LoanCalculateResult;
  public IsLoanCalculated: boolean = false;

  public IsAmountValid: boolean = true;
  public IsTimeValid: boolean = true;

  constructor(private router: Router, private loanService: LoanService) { }

  ngOnInit(): void {
  }

  public CalculateLoan()
  {
    if(this.IsAmountValid && this.IsTimeValid)
    {
      let calculateRequest = {
        amount: Number(this.LoanAmount),
        durationInYears: Number(this.LoanDurationInYears)
      }
  
      this.loanService.CalculateLoan(calculateRequest).subscribe(
        (response: LoanCalculateResult) => {
          if (response != null) {
            console.log(response);
            this.CalculatedLoan = response;
            this.IsLoanCalculated = true;
          }
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  public ValidateAmount()
  {
    this.FormatAmount();
    let isNumber = !Number.isNaN(Number(this.LoanAmount));
    let isPositive = Number(this.LoanAmount) > 0;

    if(this.LoanAmount == ""){
      this.IsAmountValid = true;
      return;
    }
    else if(isNumber && isPositive) {
      this.IsAmountValid = true;
    }
    else {
      this.IsAmountValid = false;
    }
  }

  public ValidateTime()
  {
    this.FormatTime();
    let isNumber = !Number.isNaN(Number(this.LoanDurationInYears));
    let isInRange = Number(this.LoanDurationInYears) > 0 && Number(this.LoanDurationInYears) < 100;

    if(this.LoanDurationInYears == ""){
      this.IsTimeValid = true;
      return;
    }
    else if(isNumber && isInRange) {
      this.IsTimeValid = true;
    }
    else {
      this.IsTimeValid = false;
    }
  }

  public FormatAmount()
  {
    if(this.LoanAmount.includes(','))
    {
      let frazeToReplace = /,/gi;
      this.LoanAmount = this.LoanAmount.replace(frazeToReplace, '.');
    }
  }

  public FormatTime()
  {
    if(this.LoanDurationInYears.includes(','))
    {
      let frazeToReplace = /,/gi;
      this.LoanDurationInYears = this.LoanDurationInYears.replace(frazeToReplace, '.');
    }
  }

}
