import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { ICreateEmployeeDTO } from "../../../dtos/ICreateEmployeeDTO";
import { IEmployeesRepository } from "../../../repositories/IEmployeesRepository";
import { Employee } from "../entities/Employee";

class EmployeesRepository implements IEmployeesRepository {
    private repository: Repository<Employee>;

    constructor() {
        this.repository = AppDataSource.getRepository(Employee);
    }
    
    async create({ id, company_id, employee_number, name, dependents, salary, position_id, department_id, birth_date, 
      place_birth,
      nationality,
      bi,
      marital_status,
      gender,
      address,
      contact_1,
      contact_2,
      email,
      nuit,
      vacation,
      subsidy,
      subsidy_transport,
      subsidy_food,
      subsidy_residence,
      subsidy_medical,
      subsidy_vacation,
      subsidy_shift,
      subsidy_night,
      subsidy_risk,
      subsidy_attendance,
      subsidy_performance,
      subsidy_leadership,
      subsidy_commission,
      salary_thirteenth,
      start_date,
      employee_status,
      bank_name,
      bank_account,
      nib,
      social_security,
      ipa_employee,
      employee_loan,
      loan_deduction,
      syndicate_status, inss_status}: ICreateEmployeeDTO): Promise<void> {
        const user =  this.repository.create({
            id, company_id, employee_number, name, salary, dependents, position_id, department_id, birth_date,
            place_birth,
            nationality,
            bi,
            marital_status,
            gender,
            address,
            contact_1,
            contact_2,
            email,
            nuit,
            vacation,
            subsidy,
            subsidy_transport,
            subsidy_food,
            subsidy_residence,
            subsidy_medical,
            subsidy_vacation,
            subsidy_shift,
            subsidy_night,
            subsidy_risk,
            subsidy_attendance,
            subsidy_performance,
            subsidy_leadership,
            subsidy_commission,
            salary_thirteenth,
            start_date,
            employee_status,
            bank_name,
            bank_account,
            nib,
            social_security,
            ipa_employee,
            employee_loan,
            loan_deduction,
            syndicate_status, inss_status
        });

        // console.log("007", bi, "//", name)

        const userExists = await this.findByName(user.name, user.bi, user.company_id)

        if (userExists) {
          user.id = userExists.id
          await this.repository.save(user);
        } else {
          await this.repository.save(user);
        }        
    }

    async findByName(name: string, bi: string, company_id: string): Promise<Employee | null> {
        const user = await this.repository.findOne({ 
          where: { name: name, bi: bi, company_id: company_id}
         });

        return user;
    }
    
    // async findByEmployeeId(employee_number: number): Promise<Employee | null> {
    //     const user = await this.repository.findOne({ 
    //       where: { employee_number }
    //      });

    //     return user;
    // }

    async findById(id: string, company_id: string): Promise<Employee | null> {
        const user = await this.repository.findOne({
          where: { id, company_id }
        });
        // console.log("ByyyyyyyyyyyyID:  ", user)
        return user;
    }

    async list(company_id: string): Promise<Employee[]> {
        const list = await this.repository.find({
          where: { company_id }
        });

        return list;
    }

    async listAll(): Promise<Employee[]> {
      const list = await this.repository.find();

      return list;
  }

    async delete(id: string): Promise<void> {
      await this.repository.delete(id)
    }
  
    async findByName2(name: string, company_id: string): Promise<Employee| null> {
      const user = await this.repository.findOne({ 
        where: { name, company_id }
       });

      return user;
    }

}

export { EmployeesRepository };


