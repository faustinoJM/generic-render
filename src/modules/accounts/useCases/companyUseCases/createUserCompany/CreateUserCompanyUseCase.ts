import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import ICompanyRepository from "../../../../company/repositories/ICompanyRepository";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import AppError from "../../../../../shared/errors/AppError";


@injectable()
class CreateUserCompanyUseCase {

    constructor(@inject("UsersRepository")
        private userRepository: IUsersRepository,
        
        @inject("CompanyRepository")
        private companyRepository: ICompanyRepository
        ) {}

    async execute({ user_id, name, email, password, is_admin, company_id }: ICreateUserDTO) {

        const user = await this.userRepository.findById(user_id as any)

        if (!user) {
          throw new AppError("User Auth doesn't Exists", 401)
        }
        
        const UserAlreadyExists = await this.userRepository.findByEmail(email);

        if(UserAlreadyExists) {
          throw new AppError("User Already Exists");
        }

        const companyExists = await this.companyRepository.findById(user.company_id as any)

        if (!companyExists) {
          throw new AppError("Company Doesnt Exists");
        }

        const passwordCHash = await hash(password, 8);
        is_admin = false
        await this.userRepository.create({ name, password: passwordCHash, email, is_admin, company_id: user.company_id});

    }
}

export { CreateUserCompanyUseCase }