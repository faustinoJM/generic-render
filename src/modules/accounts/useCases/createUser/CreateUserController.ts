import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {

    async handle(request: Request, response: Response) {
        const { name, password, email, company_id, is_admin} = request.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);

        await createUserUseCase.execute({ name, email, password, is_admin, company_id })

        return response.status(201).send();
    }
}

export { CreateUserController }