import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserCompanyUseCase } from "./CreateUserCompanyUseCase";

class CreateUserCompanyController {

    async handle(request: Request, response: Response) {
        const user_id = request.user?.id;

        const { name, password, email, company_id, is_admin} = request.body;

        const createUserUseCase = container.resolve(CreateUserCompanyUseCase);

        await createUserUseCase.execute({user_id, name, email, password, is_admin, company_id })

        return response.status(201).send();
    }
}

export { CreateUserCompanyController }