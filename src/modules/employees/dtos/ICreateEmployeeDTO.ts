import Department from "../../departments/infra/typeorm/entities/Department";
import Position from "../../positions/infra/typeorm/entities/Position";

interface ICreateEmployeeDTO {
  id?: string;
  employee_number?: number;
  name: string;
  salary: string;
  dependents: number;
  position_id?: string;
  department_id?: string; 
  birth_date?: Date;
  place_birth?: string;
  nationality?:  string;
  bi: string;
  marital_status?: string;
  gender?: string;
  address?: string;
  contact_1?:  string;
  contact_2?: string;
  email?: string;
  nuit?: number;
  vacation?: number;
  subsidy?:  string;
  subsidy_transport?: string;
  subsidy_food?: string;
  subsidy_residence?: string;
  subsidy_medical?: string;
  subsidy_vacation?: string;
  subsidy_shift?: string
  subsidy_night?: string;
  subsidy_risk?: string;
  subsidy_attendance?: string;
  subsidy_performance?: string;
  subsidy_leadership?: string;
  subsidy_commission?: string;
  salary_thirteenth?: string;
  department?: Department;
  position?: Position;
  start_date?: Date;
  employee_status?: string;
  bank_name?: string;
  bank_account?: number;
  nib?: number;
  social_security?: number;
  user_id?: string;
  company_id?: string;
  syndicate_status?: string;
  ipa_employee?: string;
  inss_status?: string;
  employee_loan?: string;
  loan_deduction?: string;
}

export { ICreateEmployeeDTO };