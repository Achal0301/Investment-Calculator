import {calculateInvestmentResults, formatter} from '../util/investment.js';
export default function Result({input}){
    const resultsData=calculateInvestmentResults(input);
    const initialInvestment=resultsData[0].valueEndOfYear-resultsData[0].interest-resultsData[0].annualInvestment;
    console.log(resultsData);
    return(
        <table  id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map(output=>{
                    const totalInterest=output.valueEndOfYear-output.annualInvestment*output.year-initialInvestment;
                    const totalAmountInvested=output.valueEndOfYear-totalInterest;
                    return <tr key={output.year}>
                        <td>{output.year}</td>
                        <td>{formatter.format(output.valueEndOfYear)}</td>
                        <td>{formatter.format(output.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>
        
        </table>
    );
}