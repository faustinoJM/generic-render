import { IPayrollDemo, ISalario } from "../useCases/createPayroll/CreatePayrollEmployeeUseCase";

interface ICreatePayrollEmployeeDTO {
  id?: string;
  employee_id?: string;
  payroll_id?: string;
  employee_number?: number;
  employee_name?: string;
  dependents?: number;
  position_name?: string;
  department_name?: string;
  bank_name?: string;
  bank_account?: number;
  start_date?: Date;
  nib?: number;
  social_security?: number;
  nuit?: number;
  vacation?: number;
  salary_base?: string;
  salary_liquid?: string;
  month?: string;
  year?: number;
  overtime50?: number;
  overtime100?: number;
  totalOvertime50?: number;
  totalOvertime100?: number;
  total_overtime?: string;
  month_total_workdays?: number;
  day_total_workhours?: string;
  base_day?: string;
  base_hour?: string;
  absences?: number;
  total_absences?: string;
  cash_advances?: string;
  backpay?: string;
  bonus?: string;
  subsidy?: string;
  subsidy_transport?: string;
  subsidy_food?: string;
  subsidy_residence?: string;
  subsidy_medical?: string;
  subsidy_vacation?: string;
  subsidy_shift?: string;
  subsidy_night?: string;
  subsidy_risk?: string;
  subsidy_attendance?: string;
  subsidy_performance?: string;
  subsidy_leadership?: string;
  subsidy_commission?: string;
  salary_thirteenth?: string;
  salary_fourteenth?: string;
  irps?:  string;
  inss_employee?: string;
  inss_company?: string;
  total_income?: string;
  total_inss?: string;
  user_id?: string;
  company_id?: string;
  total_salary_liquid?: string
  total_salary_base?: string
  total_salary_gross?: string
  total_inss_employee?: string
  total_inss_company?: string
  total_irps?: string
  syndicate_employee?: string;
  ipa_employee?: string;
  inss_event?: number
  inss_event_date?: Date;
  employee_loan?: string;
  loan_deduction?: string;
  created_at?: Date;
  tabelaSalario?: ISalario;
  payrollDemo?: IPayrollDemo;
}

export { ICreatePayrollEmployeeDTO };

// "subsidy_transport"
// "subsidy_food"
// "subsidy_residence"
// "subsidy_medical"
// "subsidy_vacation"
// "salary_thirteenth"