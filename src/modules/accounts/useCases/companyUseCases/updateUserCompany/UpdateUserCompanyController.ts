import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserCompanyUseCase } from "./UpdateUserCompanyUseCase";


class UpdateUserCompanyController {
  async handle(request: Request, response: Response) {

    const id = request.params.id;
    
    const {name, email, password} = request.body;

    const updateUserUseCase = container.resolve(UpdateUserCompanyUseCase)

    const position = await updateUserUseCase.execute({id, name, email, password})

    return response.status(204).json(position)
  }
}

export { UpdateUserCompanyController }