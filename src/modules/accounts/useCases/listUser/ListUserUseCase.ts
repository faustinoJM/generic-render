import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { hash } from "bcryptjs";
import AppError  from "../../../../shared/errors/AppError";
import ICompanyRepository from "../../../company/repositories/ICompanyRepository";
import { IEmployeesRepository } from "../../../employees/repositories/IEmployeesRepository";


// interface IRequest {
//     name: string;
//     username: string;
//     password: string;
//     email: string;
//     driver_licence: string;
// }

@injectable()
class ListUserUseCase {

    constructor(@inject("UsersRepository")
        private userRepository: IUsersRepository,
        
        @inject("CompanyRepository")
        private companyRepository: ICompanyRepository,

        @inject("EmployeesRepository")
        private employeeRepository: IEmployeesRepository,
      ) {}

    async execute() {
        const companies = await this.companyRepository.list()
        const users = await this.userRepository.list();
        const employees =  await this.employeeRepository.listAll()

        users.forEach(async user => {
          let company_id;
          user.company_name = companies?.find((company) => company.id === user.company_id)?.company_name as any
          let employee_company =  employees?.filter((company) => company.company_id === user.company_id)?.length
          // let employee_company =
          user.total_employee = employee_company
        })

        return users;

    }
}

export { ListUserUseCase }