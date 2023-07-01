import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdatePayrollUseCase } from "./UpdatePayrollUseCase";


class UpdatePayrollController {

    async handle(request: Request, response: Response) {
        const user_id = request.user?.id;

        const id = request.params.id || request.body

        const {payroll_status,
              month,
              year,
              flag,
        } = request.body

        const updatePayrollUseCase = container.resolve(UpdatePayrollUseCase);

        const payroll = await updatePayrollUseCase.execute(id, user_id, payroll_status, month, year, flag)

      return response.json(payroll);
    }
}

export { UpdatePayrollController }