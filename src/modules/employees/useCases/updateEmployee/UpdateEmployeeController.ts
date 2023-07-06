import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateEmployeeUseCase } from "./UpdateEmployeeUseCase";

class UpdateEmployeeController {
  async handle(request: Request, response: Response) {
    const user_id = request.user?.id;

    const {employee_number, name, dependents, salary, position_id, department_id, birth_date, 
      place_birth,
      nationality,
      bi,
      marital_status,
      gender,
      address,
      contact_1,
      contact_2,
      email,
      nuit,
      vacation,
      subsidy,
      department,
      position,
      start_date,
      employee_status,
      bank_name,
      bank_account,
      nib,
      social_security,
      employee_loan,
      loan_deduction,
      syndicate_status, inss_status,
      subsidy_transport,
      subsidy_food,
      subsidy_residence,
      subsidy_medical,
      subsidy_vacation,
      subsidy_shift,
      subsidy_night,
      subsidy_risk,
      subsidy_attendance,
      subsidy_performance,
      subsidy_leadership,
      subsidy_commission,
      salary_thirteenth,
      ipa_employee,
    } = request.body;
    const id = request.params.id;

    const updateEmployeeUseCase = container.resolve(UpdateEmployeeUseCase)

    const employee = await updateEmployeeUseCase.execute({id, user_id, employee_number, name, dependents, salary, position_id, department_id, birth_date, 
      place_birth,
      nationality,
      bi,
      marital_status,
      gender,
      address,
      contact_1,
      contact_2,
      email,
      nuit,
      vacation,
      subsidy,
      department,
      position,
      start_date,
      employee_status,
      bank_name,
      bank_account,
      nib,
      social_security, 
      employee_loan,
      loan_deduction,
      syndicate_status, inss_status,
      subsidy_transport,
      subsidy_food,
      subsidy_residence,
      subsidy_medical,
      subsidy_vacation,
      subsidy_shift,
      subsidy_night,
      subsidy_risk,
      subsidy_attendance,
      subsidy_performance,
      subsidy_leadership,
      subsidy_commission,
      salary_thirteenth,
      ipa_employee,
    })
      // console.log("++++++++", employee)

    return response.status(204).json(employee)
  }
}


export { UpdateEmployeeController }