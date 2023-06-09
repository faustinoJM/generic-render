import { inject, injectable } from "tsyringe";
import AppError  from "../../../../shared/errors/AppError";
import { IPayrollRepository } from "../../repositories/IPayrollRepository";
import { IUsersRepository } from "../../../accounts/repositories/IUsersRepository";

@injectable()
class UpdatePayrollUseCase {

    constructor(@inject("PayrollRepository")
        private payrollRepository: IPayrollRepository,

        @inject("UsersRepository")
        private userRepository: IUsersRepository,
      ) {}

    async execute(id: string, user_id: string, payroll_status: string, month: string, year: number, flag: string) {
        const user = await this.userRepository.findById(user_id as any)

        if (!user) {
          throw new  AppError("User Auth doesn't Exists")
        }
        
        const payroll = await this.payrollRepository.findById(id, user.company_id);

        if (!payroll) {
          throw new AppError("Payroll doesn't exists")
        }

        const payrollUpdated = await this.payrollRepository.create({id, month, year, payroll_status, flag})

        return payrollUpdated
    }
}

export { UpdatePayrollUseCase }