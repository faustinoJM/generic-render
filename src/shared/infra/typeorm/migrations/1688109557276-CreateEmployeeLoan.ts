import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateEmployeeLoan1688109557276 implements MigrationInterface {
    
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'employees_loans',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'employee_id',
            type: 'uuid', 
            isNullable: true
          },
          {
            name: 'company_id',
            type: 'uuid',
          },
          {
            name: "employee_loan",
            type: "double precision",
            isNullable: true,
          },
          {
            name: "loan_deduction",
            type: "double precision",
            isNullable: true,
          },
          {
            name: "loan_end_date",
            type: "timestamp",
            isNullable: true
          },
          {
            name: 'created_at',
            type: "timestamp",
            default: "now()"
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('employees_loans')
  }


}
