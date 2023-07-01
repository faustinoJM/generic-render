import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import AppError from "../../../../../shared/errors/AppError";



@injectable()
class DeleteUserCompanyUseCase {

    constructor(@inject("UsersRepository")
        private userRepository: IUsersRepository) {}

    async execute(id: string) {

        const user = await this.userRepository.findById(id);

        if(!user) {
          throw new AppError("User Auth doesn't Exists")
        }

        await this.userRepository.delete(id)

        return user;

    }
}

export { DeleteUserCompanyUseCase }