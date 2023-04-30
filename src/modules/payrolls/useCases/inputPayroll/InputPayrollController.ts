import { Request, Response } from "express";
import { container } from "tsyringe";
import { InputPayrollUseCase } from "./InputPayrollUseCase";

class InputPayrollController {

    async handle(request: Request, response: Response) {
        const user_id = request.user?.id;

        const { 
          overtime50, 
          overtime100,
          absences, 
          month_total_workdays, 
          day_total_workhours,
          cash_advances,
          backpay,
          bonus,
          subsidy_transport,
          subsidy_food,
          subsidy_residence,
          subsidy_medical,
          subsidy_vacation,
          salary_thirteenth,
          syndicate_employee} = request.body;
          const id = request.params.id;


        const inputPayrollUseCase = container.resolve(InputPayrollUseCase);

        const payrolls = await inputPayrollUseCase.execute({ 
          id,
          user_id,
          overtime50, 
          overtime100,
          absences,
          month_total_workdays, 
          day_total_workhours,
          cash_advances,
          backpay,
          bonus,
          subsidy_transport,
          subsidy_food,
          subsidy_residence,
          subsidy_medical,
          subsidy_vacation,
          salary_thirteenth,
          syndicate_employee})

        return response.json(payrolls);
    }
}

export { InputPayrollController }