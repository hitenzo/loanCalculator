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

  public LoanAmount: number;
  public LoanDurationInYears: number;
  public CalculatedLoan: LoanCalculateResult;
  public IsLoanCalculated: boolean = false;

  constructor(private router: Router, private loanService: LoanService) { }

  ngOnInit(): void {
  }

  public CalculateLoan()
  {
    let calculateRequest = {
      amount: this.LoanAmount,
      durationInYears: this.LoanDurationInYears
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
