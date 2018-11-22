using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers.ViewModels
{

    public class LoanCalculateRequest
    {
        public float Amount { get; set; }
        public int DurationInYears { get; set; }
    }
}
