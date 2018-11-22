import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { LoanService } from '../../services/loan-service';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private loanService: LoanService) { }

  ngOnInit(): void {
  }

  public CalculateLoan()
  {
    //example data
    let loanAmount = 99;
    let loanDurationInYears = 10;
    let calculateRequest = {
      amount: loanAmount,
      durationInYears: loanDurationInYears
    }


    this.loanService.CalculateLoan(calculateRequest).subscribe(
      (response: number) => {
        if (response != null) {
          console.log(response);
        }
      },
      err => {
        console.log(err);
      }
    );
    //call backend to calculate loan

    //give calculated loan data to front
  }
}
