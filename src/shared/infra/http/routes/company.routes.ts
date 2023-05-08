import { Router } from "express";
import { CreateCompanyController } from "../../../../modules/company/useCases/createCompany/CreateCompanyController";
import { CreateuserAndCompanyController } from "../../../../modules/company/useCases/createUserAndCompany/CreateuserAndCompanyController";
import { ListCompanyController } from "../../../../modules/company/useCases/listCompany/ListCompanyController";

const companyRouter = Router();
const createCompanyController = new CreateCompanyController();
const createuserAndCompanyController = new CreateuserAndCompanyController()
const listCompanyController = new ListCompanyController()


companyRouter.post("/", createCompanyController.handle);
companyRouter.get('/', listCompanyController.handle)
companyRouter.post("/user-company", createuserAndCompanyController.handle)



export { companyRouter };
