using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using server.Controllers.ViewModels;
using server.Models.LoanTypesData;

namespace server.Services
{
    public class LoanService
    {
        public LoanService()
        {
            
        }

        public LoanCalculateResult CalcDecreaseMonthLoan(LoanCalculateRequest request)
        {
            LoanCalculateResult result = new LoanCalculateResult();
            DecreasingMonthlyLoan loanType = new DecreasingMonthlyLoan();

            int ratesAmount = request.DurationInYears * loanType.RatesPerYear;
            float capitalRateAmount = request.Amount / ratesAmount;

            for(int i = 0; i < ratesAmount; i++)
            {
                float amountYetToPay = request.Amount - (capitalRateAmount * i);
                float generatedInterest = amountYetToPay * (1f/loanType.RatesPerYear) * loanType.InterestPerYear;
                float rateAmount = capitalRateAmount + generatedInterest;
                result.LoanRates.Add(rateAmount);
                // result.LoanCost = result.LoanCost + rateAmount;
            }

            result.LoanCost = result.LoanRates.Sum();

            return result;
        }
    }
}
