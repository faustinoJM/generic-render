"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSettings1680599503894 = void 0;
const typeorm_1 = require("typeorm");
class CreateSettings1680599503894 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'settings',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'company_id',
                        type: 'uuid',
                    },
                    {
                        name: 'company_name',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'company_telephone',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: "company_contact",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "company_email",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "company_website",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "company_fax",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "company_address",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "company_province",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "company_city",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "postal_code",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "company_country",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "company_avatar",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "payroll_total_workdays_month",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "payroll_total_workhours_day",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "overtime",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "absences",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "cash_advances",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "backpay",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "bonus",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "subsidy",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "flag",
                        type: "int",
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
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKSettingCompany",
                        referencedTableName: "company",
                        referencedColumnNames: ["id"],
                        columnNames: ["company_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('settings');
        });
    }
}
exports.CreateSettings1680599503894 = CreateSettings1680599503894;
