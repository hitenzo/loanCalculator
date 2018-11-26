using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using server.Controllers.ViewModels;

namespace server.Models.LoanTypesData
{
    public class DecreasingMonthlyLoan
    {
        public int RatesPerYear { get; set; }
        public float InterestPerYear { get; set; }

        public DecreasingMonthlyLoan()
        {
            RatesPerYear = 12;
            InterestPerYear = 0.035f;
        }

    }
}
