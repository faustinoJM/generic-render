import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateCompanyUseCase } from "./UpdateCompanyUseCase";

class UpdateCompanyController {
  async handle(request: Request, response: Response) {
    const {
          company_name, 
          company_contact,
          company_email,
          company_address,
          company_address_2,
          company_street,
          company_city,
          company_province,
          company_nuit,
          company_bank_name,
          company_bank_account,
    } = request.body;
    const id = request.params.id;

    const updateCompanyUseCase = container.resolve(UpdateCompanyUseCase)

    const company = await updateCompanyUseCase.execute({
      id, 
      company_name, 
      company_contact,
      company_email,
      company_address,
      company_address_2,
      company_street,
      company_city,
      company_province,
      company_nuit,
      company_bank_name,
      company_bank_account,})

    return response.status(204).json(company)
  }
}


export { UpdateCompanyController }