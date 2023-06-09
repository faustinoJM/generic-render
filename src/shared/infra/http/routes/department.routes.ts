import { Router } from "express";
import { CreateDepartmentController } from "../../../../modules/departments/useCases/createDepartment/CreateDepartmentController";
import { DeleteDepartmentController } from "../../../../modules/departments/useCases/deleteDepartment/DeleteDepartmentController";
import { ListDepartmentController } from "../../../../modules/departments/useCases/listDepartment/ListDepartmentController";
import { SingleDepartmentController } from "../../../../modules/departments/useCases/singleDepartment/SingleDepartmentController";
import { UpdateDepartmentController } from "../../../../modules/departments/useCases/updateDepartment/UpdateDepartmentController";
import { CreateEmployeeController } from "../../../../modules/employees/useCases/createEmployee/CreateEmployeeController";
import { ListEmployeeController } from "../../../../modules/employees/useCases/listEmployee/ListEmployeeController";
import { SingleEmployeeController } from "../../../../modules/employees/useCases/singleEmployee/SingleEmployeeController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const departmentRouter = Router();
const listDepartmentController = new ListDepartmentController();
const createDepartmentController = new CreateDepartmentController();
const singleDepartmentController = new SingleDepartmentController()
const deleteDepartmentController = new DeleteDepartmentController()
const updateDepartmentController= new UpdateDepartmentController()

departmentRouter.use(ensureAuthenticated)
// departmentRouter.use(ensureAdmin)

departmentRouter.post("/", ensureAdmin, createDepartmentController.handle);

departmentRouter.get("/", listDepartmentController.handle);

departmentRouter.get("/:id", singleDepartmentController.handle);

departmentRouter.delete("/:id", ensureAdmin, deleteDepartmentController.handle);

departmentRouter.put("/:id", ensureAdmin, updateDepartmentController.handle)


export { departmentRouter };
