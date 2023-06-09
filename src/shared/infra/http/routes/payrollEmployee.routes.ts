import { Router } from "express";
import { CreatePayrollEmployeeController } from "../../../../modules/payrollsEmployees/useCases/createPayroll/CreatePayrollEmployeeController";
import { DeletePayrollEmployeeController } from "../../../../modules/payrollsEmployees/useCases/deletePayroll/DeletePayrollEmployeeController";
import { ImportExcelController } from "../../../../modules/employees/useCases/importExcel/ImportExcelController";
import { InputPayrollEmployeeController } from "../../../../modules/payrollsEmployees/useCases/inputPayroll/InputPayrollEmployeeController";
import { OutputAllController } from "../../../../modules/payrollsEmployees/useCases/listAllSAP/OutputAllController";
import { ListInputPayrollEmployeeController } from "../../../../modules/payrollsEmployees/useCases/ListInputPayroll/ListInputPayrollEmployeeController";
import { OutputPayrollEmployeeController } from "../../../../modules/payrollsEmployees/useCases/ListOutputPayroll/OutputPayrollEmployeeController";
import { ListPayrollEmployeeController } from "../../../../modules/payrollsEmployees/useCases/listPayrollEmployee/ListPayrollEmployeeController";
import { SinglePayrollEmployeeController } from "../../../../modules/payrollsEmployees/useCases/SinglePayrollEmployee/SinglePayrollEmployeeController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const payrollEmployeeRouter = Router();
const createPayrollController = new CreatePayrollEmployeeController();
const listInputPayrollController = new ListInputPayrollEmployeeController()
const outputPayrollController = new OutputPayrollEmployeeController();
const inputPayrollController = new InputPayrollEmployeeController();
const singlePayrollController = new SinglePayrollEmployeeController()
const deletePayrollController = new DeletePayrollEmployeeController()
const importExcelController = new ImportExcelController()
const outputAllController = new OutputAllController()
const listPayrollEmployeeController = new ListPayrollEmployeeController()

payrollEmployeeRouter.get("/all", outputAllController.handle);
payrollEmployeeRouter.use(ensureAuthenticated)


payrollEmployeeRouter.post("/", ensureAdmin, createPayrollController.handle);
payrollEmployeeRouter.get("/", listPayrollEmployeeController.handle);
payrollEmployeeRouter.get("/output/:id", outputPayrollController.handle);
// payrollEmployeeRouter.get("/input/:id", ensureAdmin, listPayrollEmployeeController.handle);
payrollEmployeeRouter.get("/input/:id", ensureAdmin, listInputPayrollController.handle);
payrollEmployeeRouter.get("/:id", singlePayrollController.handle);
payrollEmployeeRouter.put("/:id", ensureAdmin, inputPayrollController.handle);
payrollEmployeeRouter.delete("/", ensureAdmin, deletePayrollController.handle)
// payrollEmployeeRouter.post("/excel/import", ensureAdmin, importExcelController.handle)







export { payrollEmployeeRouter };
