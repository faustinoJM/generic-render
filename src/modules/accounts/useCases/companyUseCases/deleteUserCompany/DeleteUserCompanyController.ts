import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUserCompanyUseCase } from "./DeleteUserCompanyUseCase";

interface IList {
  password?: string;
  is_admin?: boolean
}
class DeleteUserCompanyController {

    async handle(request: Request, response: Response) {
        const id = request.params.id

        const deleteUserUseCase = container.resolve(DeleteUserCompanyUseCase);

        const user = await deleteUserUseCase.execute(id)
      
      return response.json(user);
    }
}

export { DeleteUserCompanyController }