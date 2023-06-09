import { Router } from "express";
import { CreateEmployeeController } from "../../../../modules/employees/useCases/createEmployee/CreateEmployeeController";
import { DeleteEmployeeController } from "../../../../modules/employees/useCases/deleteEmployee/DeleteEmployeeController";
import { ImportExcelController } from "../../../../modules/employees/useCases/importExcel/ImportExcelController";
import { ListEmployeeController } from "../../../../modules/employees/useCases/listEmployee/ListEmployeeController";
import { SingleEmployeeController } from "../../../../modules/employees/useCases/singleEmployee/SingleEmployeeController";
import { UpdateEmployeeController } from "../../../../modules/employees/useCases/updateEmployee/UpdateEmployeeController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const employeeRouter = Router();
const createEmployeeController = new CreateEmployeeController();
const listEmployeeController = new ListEmployeeController();
const singleEmployeeController = new SingleEmployeeController()
const deleteEmployeeController = new DeleteEmployeeController()
const updateEmployeeController = new UpdateEmployeeController()
const importExcelController = new ImportExcelController()

employeeRouter.use(ensureAuthenticated)
// employeeRouter.use(ensureAdmin)

employeeRouter.post("/", ensureAdmin, createEmployeeController.handle);

employeeRouter.get("/", listEmployeeController.handle);

employeeRouter.get("/:id", singleEmployeeController.handle);

employeeRouter.delete("/:id", ensureAdmin, deleteEmployeeController.handle)

employeeRouter.put("/:id", ensureAdmin, updateEmployeeController.handle)

employeeRouter.post("/excel/import", ensureAdmin, importExcelController.handle)

export { employeeRouter };
