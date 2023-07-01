import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { hash } from "bcryptjs";
import AppError  from "../../../../../shared/errors/AppError";
import ICompanyRepository from "../../../../company/repositories/ICompanyRepository";


// interface IRequest {
//     name: string;
//     username: string;
//     password: string;
//     email: string;
//     driver_licence: string;
// }

@injectable()
class ListUserCompanyUseCase {

    constructor(@inject("UsersRepository")
        private userRepository: IUsersRepository,
        
        @inject("CompanyRepository")
      private companyRepository: ICompanyRepository) {}

    async execute(user_id: string) {
        const user = await this.userRepository.findById(user_id as any)

        if (!user) {
          throw new AppError("User Auth doesn't Exists")
        }

        const companies = await this.companyRepository.list()
        const users = await this.userRepository.listByCompany(user.company_id);

        users.forEach(user => {
          user.company_name = companies?.find((company) => company.id === user.company_id)?.company_name as any
        })

        return users;

    }
}

export { ListUserCompanyUseCase }