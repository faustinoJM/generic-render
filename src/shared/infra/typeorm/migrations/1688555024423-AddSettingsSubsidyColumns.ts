import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AddSettingsSubsidyColumns1688555024423 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('settings', new TableColumn({
          name: 'column_ipa_employee',
          type: 'varchar',
          isNullable: true
        }
        )),
        await queryRunner.addColumn('settings', new TableColumn({
          name: 'column_subsidy_shift',
          type: 'varchar',
          isNullable: true
        }
        )),
        await queryRunner.addColumn('settings', new TableColumn({
          name: 'column_subsidy_night',
          type: 'varchar',
          isNullable: true
        }
        )),
        await queryRunner.addColumn('settings', new TableColumn({
            name: 'column_subsidy_risk',
            type: 'varchar',
            isNullable: true
          }
        )),
        await queryRunner.addColumn('settings', new TableColumn({
            name: 'column_subsidy_attendance',
            type: 'varchar',
            isNullable: true
          }
        )),
        await queryRunner.addColumn('settings', new TableColumn({
            name: 'column_subsidy_performance',
            type: 'varchar',
            isNullable: true
          }
        )),
        await queryRunner.addColumn('settings', new TableColumn({
            name: 'column_subsidy_leadership',
            type: 'varchar',
            isNullable: true
          }
        )),
        await queryRunner.addColumn('settings', new TableColumn({
            name: 'column_subsidy_commission',
            type: 'varchar',
            isNullable: true
          }
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
