import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListInputPayrollEmployeeUseCase } from "./ListInputPayrollEmployeeUseCase";


class ListInputPayrollEmployeeController {

    async handle(request: Request, response: Response) {
        const user_id = request.user?.id;

        const id = request.params.id || request.body
        console.log(id)

        const { year, month } = request.body

        const listInputPayrollUseCase = container.resolve(ListInputPayrollEmployeeUseCase);

        const payrolls = await listInputPayrollUseCase.execute(id, year, month, user_id)

        return response.json(payrolls);
    }
}

export { ListInputPayrollEmployeeController }