import { Request, Response } from "express";
import { container } from "tsyringe";
import { User } from "../../../infra/typeorm/entities/User";
import { ListUserCompanyUseCase } from "./ListUserCompanyUseCase";

interface IList {
  password?: string;
  is_admin?: boolean
}
class ListUserCompanyController {

    async handle(request: Request, response: Response) {
        const user_id = request.user?.id;

        const listUserCompanyUseCase = container.resolve(ListUserCompanyUseCase);

        const users = await listUserCompanyUseCase.execute(user_id)
        let users2: IList[] = users;
        
        users2.map(user => {
          delete user.password
          // delete user.is_admin
        })

      return response.json(users2);
    }
}

export { ListUserCompanyController }