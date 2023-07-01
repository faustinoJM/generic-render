import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm"

export class AddEmployeeForeignKeyToLoan1688150943812 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    
    await queryRunner.addColumn('employees', new TableColumn(
      {
      name: 'employee_loan_id',
      type: 'uuid',
      isNullable: true
      }
    ))

    await queryRunner.createForeignKey(
      'employees',
      new TableForeignKey({
        name: 'FKEmployeeEmployeeLoan',
        columnNames: ['employee_loan_id'],
        referencedTableName: 'employees_loans',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
      )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('employees', 'FKEmployeePosition');

    await queryRunner.dropColumn('employees', 'position_id');

  }

}
