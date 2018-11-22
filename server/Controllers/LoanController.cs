using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using server.Controllers.ViewModels;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoanController : ControllerBase
    {
        public LoanController()
        {
            
        }

        [HttpPost("CalculateLoanPlan")]
        public int CalculateLoanPlan([FromBody] LoanCalculateRequest request)
        {
            return 99;
        }
    }
}
