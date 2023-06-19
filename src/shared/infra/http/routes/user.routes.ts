import { Router } from "express";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController";
import { DeleteUserController } from "../../../../modules/accounts/useCases/deleteUser/DeleteUserController";
import { ListUserController } from "../../../../modules/accounts/useCases/listUser/ListUserController";
import { ListUserCompanyController } from "../../../../modules/accounts/useCases/listUserCompany/ListUserCompanyController";
import { UpdateUserController } from "../../../../modules/accounts/useCases/updateUser/UpdateUserController";
import { DeleteEmployeeController } from "../../../../modules/employees/useCases/deleteEmployee/DeleteEmployeeController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const userRouter = Router();
const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const deleteUserController = new DeleteUserController()
const updateUserController = new UpdateUserController()
const listUserCompanyController = new ListUserCompanyController();

userRouter.post("/", ensureAdmin, createUserController.handle);

userRouter.get("/", listUserController.handle);

userRouter.get("/company", ensureAuthenticated, listUserCompanyController.handle);

userRouter.delete("/:id", ensureAdmin, deleteUserController.handle)

userRouter.put("/:id", ensureAdmin, updateUserController.handle)

export { userRouter };
