import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AddSubsidyColumns1688472726983 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('employees', new TableColumn({
        name: 'subsidy_night',
        type: 'double precision',
        isNullable: true
      }
    )),
    await queryRunner.addColumn('employees', new TableColumn({
          name: 'subsidy_risk',
          type: 'double precision',
          isNullable: true
      }
    )),
    await queryRunner.addColumn('employees', new TableColumn({
          name: 'subsidy_attendance',
          type: 'double precision',
          isNullable: true
      }
    )),
   await queryRunner.addColumn('employees', new TableColumn({
          name: 'subsidy_performance',
          type: 'double precision',
          isNullable: true
        }
    )),
    await queryRunner.addColumn('employees', new TableColumn({
          name: 'subsidy_leadership',
          type: 'double precision',
          isNullable: true
        }
    )),
    await queryRunner.addColumn('employees', new TableColumn({
          name: 'subsidy_commission',
          type: 'double precision',
          isNullable: true
        }
     ))
      
    await queryRunner.addColumn('payrolls_employees', new TableColumn({
      name: 'subsidy_night',
      type: 'double precision',
      isNullable: true
    }
    )),
    await queryRunner.addColumn('payrolls_employees', new TableColumn({
        name: 'subsidy_risk',
        type: 'double precision',
        isNullable: true
      }
    )),
    await queryRunner.addColumn('payrolls_employees', new TableColumn({
        name: 'subsidy_attendance',
        type: 'double precision',
        isNullable: true
      }
    )),
    await queryRunner.addColumn('payrolls_employees', new TableColumn({
        name: 'subsidy_performance',
        type: 'double precision',
        isNullable: true
      }
    )),
    await queryRunner.addColumn('payrolls_employees', new TableColumn({
        name: 'subsidy_leadership',
        type: 'double precision',
        isNullable: true
      }
    )),
    await queryRunner.addColumn('payrolls_employees', new TableColumn({
        name: 'subsidy_commission',
        type: 'double precision',
        isNullable: true
      }
    ))
  }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumns("employees", [
        "subsidy_night",
        "subsidy_risk",
        "subsidy_attendance",
        "subsidy_performance",
        "subsidy_leadership",
        "subsidy_commission",
      ])

      await queryRunner.dropColumns("payrolls_employees", [
        "subsidy_night",
        "subsidy_risk",
        "subsidy_attendance",
        "subsidy_performance",
        "subsidy_leadership",
        "subsidy_commission",
      ])
    }

}
