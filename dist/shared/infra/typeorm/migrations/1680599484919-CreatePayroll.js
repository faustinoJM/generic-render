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
exports.CreatePayroll1680599484919 = void 0;
const typeorm_1 = require("typeorm");
class CreatePayroll1680599484919 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'payrolls',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'employee_uid',
                        type: 'uuid',
                        isNullable: true
                    },
                    {
                        name: 'company_id',
                        type: 'uuid',
                    },
                    {
                        name: 'employee_name',
                        type: 'varchar',
                    },
                    {
                        name: "dependents",
                        type: "int",
                    },
                    {
                        name: "year",
                        type: "int",
                    },
                    {
                        name: "month",
                        type: "varchar",
                    },
                    {
                        name: "position_name",
                        type: "varchar",
                    },
                    {
                        name: "departament_name",
                        type: "varchar",
                    },
                    {
                        name: "nib",
                        type: "bigint",
                    },
                    {
                        name: "social_security",
                        type: "bigint"
                    },
                    {
                        name: "nuit",
                        type: "bigint"
                    },
                    {
                        name: "salary_base",
                        type: "double precision",
                    },
                    {
                        name: "total_income",
                        type: "double precision",
                    },
                    {
                        name: "salary_liquid",
                        type: "double precision",
                    },
                    {
                        name: "overtime50",
                        type: "int",
                    },
                    {
                        name: "overtime100",
                        type: "int",
                    },
                    {
                        name: "total_overtime",
                        type: "double precision",
                    },
                    {
                        name: "month_total_workdays",
                        type: "int",
                    },
                    {
                        name: "day_total_workhours",
                        type: "int",
                    },
                    {
                        name: "base_day",
                        type: "double precision",
                    },
                    {
                        name: "base_hour",
                        type: "double precision",
                    },
                    {
                        name: "absences",
                        type: "int",
                    },
                    {
                        name: "total_absences",
                        type: "double precision",
                    },
                    {
                        name: "cash_advances",
                        type: "double precision",
                    },
                    {
                        name: "backpay",
                        type: "double precision",
                    },
                    {
                        name: "subsidy",
                        type: "double precision",
                    },
                    {
                        name: "bonus",
                        type: "double precision",
                    },
                    {
                        name: "irps",
                        type: "double precision",
                    },
                    {
                        name: "inss_employee",
                        type: "double precision",
                    },
                    {
                        name: "inss_company",
                        type: "double precision",
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
                foreignKeys: [
                    {
                        name: 'FKPayrollEmployee',
                        referencedTableName: 'employees',
                        referencedColumnNames: ['id'],
                        columnNames: ['employee_uid'],
                        onDelete: 'SET NULL',
                        onUpdate: 'CASCADE'
                    },
                    {
                        name: "FKPayrollCompany",
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
            yield queryRunner.dropTable('payrolls');
        });
    }
}
exports.CreatePayroll1680599484919 = CreatePayroll1680599484919;
