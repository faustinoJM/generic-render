export default interface ICreateSettingDTO {
  id?: string;
  user_id?: string;
  company_id?: string;
  company_name?: string;
  company_telephone?: number;
  company_contact?: number;
  company_email?: string;
  company_website?: string;
  company_fax?: string;
  company_address?: string;
  company_address_2?: string;
  company_street?: string;
  company_province?: string;
  company_city?: string;
  postal_code?: number
  company_country?: string;
  company_avatar?: string;
  company_nuit?: string;
  company_bank_name?: string;
  company_bank_account?: string;
  company_logo_name?: string;
  company_logo_title?: string;
  payroll_month_total_workdays?: number;
  payroll_day_total_workhours?: string;
  payroll_syndicate_tax?: number;
  payroll_inss_employee_tax?: number,
  payroll_inss_company_tax?: number,
  column_position_name?: string
  column_department_name?: string
  column_overtime?: string
  column_absences?: string
  column_cash_advances?: string
  column_backpay?: string
  column_bonus?: string
  column_subsidy?: string
  column_syndicate?: string
  column_subsidy_transport?: string
  column_subsidy_food?: string
  column_subsidy_residence?: string
  column_subsidy_medical?: string
  column_subsidy_vacation?: string
  column_salary_thirteenth?: string
  column_salary_fourteenth?: string
  payslip_comment?: string;
  payslip_type?: number;
  language_options?: string;
  column_loan?: string;
  column_ipa_employee?: string;
  column_subsidy_shift?: string;
  column_subsidy_night?: string;
  column_subsidy_risk?: string;
  column_subsidy_attendance?: string;
  column_subsidy_performance?: string;
  column_subsidy_leadership?: string;
  column_subsidy_commission?: string;
  flag?: number;
  company_logo_multer?: string[];
  CompanyLogoURL?: string;

}