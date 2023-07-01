import { Router } from "express";
import { CreateUserCompanyController } from "../../../../modules/accounts/useCases/companyUseCases/createUserCompany/CreateUserCompanyController";
import { ListUserCompanyController } from "../../../../modules/accounts/useCases/companyUseCases/listUserCompany/ListUserCompanyController";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController";
import { DeleteUserController } from "../../../../modules/accounts/useCases/deleteUser/DeleteUserController";
import { ListUserController } from "../../../../modules/accounts/useCases/listUser/ListUserController";
import { UpdateUserController } from "../../../../modules/accounts/useCases/updateUser/UpdateUserController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const userRouter = Router();
const createUserController = new CreateUserController();
const createUserCompanyController = new CreateUserCompanyController();
const deleteUserController = new DeleteUserController()
const updateUserController = new UpdateUserController()
const listUserController = new ListUserController();
const listUserCompanyController = new ListUserCompanyController();

userRouter.get("/", listUserController.handle);

userRouter.post("/", createUserController.handle);

userRouter.delete("/:id", deleteUserController.handle)

userRouter.put("/:id", updateUserController.handle)

userRouter.get("/company", ensureAuthenticated, listUserCompanyController.handle);

userRouter.post("/company",  ensureAuthenticated, ensureAdmin, createUserCompanyController.handle);

userRouter.delete("/company/:id",  ensureAuthenticated, ensureAdmin, deleteUserController.handle)

userRouter.put("/company/:id",  ensureAuthenticated, ensureAdmin, updateUserController.handle)

export { userRouter };
