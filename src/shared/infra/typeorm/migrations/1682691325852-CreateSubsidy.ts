import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class CreateSubsidy1682691325852 implements MigrationInterface {
    
  public async up(queryRunner: QueryRunner): Promise<void> {
  await queryRunner.addColumn("payrolls", new TableColumn({
    name: "subsidy_transport",
    type: "varchar",
    isNullable: true,
  }))
  await queryRunner.addColumn("payrolls", new TableColumn({
    name: "subsidy_food",
    type: "varchar",
    isNullable: true,
  }))
  await queryRunner.addColumn("payrolls", new TableColumn({
    name: "subsidy_residence",
    type: "varchar",
    isNullable: true,
  }))
  await queryRunner.addColumn("payrolls", new TableColumn({
    name: "subsidy_medical",
    type: "varchar",
    isNullable: true,
  })) 
  await queryRunner.addColumn("payrolls", new TableColumn({
    name: "salary_thirteenth",
    type: "varchar",
    isNullable: true,
  }))

  await queryRunner.addColumn("employees", new TableColumn({
    name: "subsidy_transport",
    type: "varchar",
    isNullable: true,
  }))
  await queryRunner.addColumn("employees", new TableColumn({
    name: "subsidy_food",
    type: "varchar",
    isNullable: true,
  }))
  await queryRunner.addColumn("employees", new TableColumn({
    name: "subsidy_residence",
    type: "varchar",
    isNullable: true,
  }))
  await queryRunner.addColumn("employees", new TableColumn({
    name: "subsidy_medical",
    type: "varchar",
    isNullable: true,
  }))
  await queryRunner.addColumn("employees", new TableColumn({
    name: "salary_thirteenth",
    type: "varchar",
    isNullable: true,
  }))

  

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
