import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
  }

  public CalculateLoan()
  {
    //example data
    let loanAmount = 99;
    let loanDurationInYears = 10;

    //call backend to calculate loan

    //give calculated loan data to front
  }
}
