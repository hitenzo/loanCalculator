using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using server.Controllers.ViewModels;
using server.Models.LoanTypesData;
using server.Services;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoanController : ControllerBase
    {
        private LoanService loanService;

        public LoanController()
        {
            loanService = new LoanService();
        }

        [HttpPost("CalcDecreaseMonthLoan")]
        public LoanCalculateResult CalcDecreaseMonthLoan([FromBody] LoanCalculateRequest request)
        {
            return loanService.CalcDecreaseMonthLoan(request);
        }
    }
}
