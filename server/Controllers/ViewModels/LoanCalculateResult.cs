using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using server.Controllers.ViewModels;

namespace server.Controllers.ViewModels
{
    public class LoanCalculateResult
    {
        public LoanCalculateResult()
        {
            LoanCost = 0;
            LoanRates = new List<float>();
        }
        public float LoanCost { get; set; }
        public List<float> LoanRates { get; set; }

    }
}
