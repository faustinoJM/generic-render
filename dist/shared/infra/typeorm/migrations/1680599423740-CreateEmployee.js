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
exports.CreateEmployee1680599423740 = void 0;
const typeorm_1 = require("typeorm");
class CreateEmployee1680599423740 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'employees',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'employee_id',
                        type: 'int',
                        // isGenerated: true,
                        // generationStrategy: 'increment',
                        isNullable: true,
                    },
                    {
                        name: 'company_id',
                        type: 'uuid',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        // isUnique: true
                    },
                    {
                        name: 'dependents',
                        type: 'int',
                    },
                    {
                        name: "salary",
                        type: "double precision",
                    },
                    {
                        name: "birth_date",
                        type: "Date",
                        isNullable: true
                    },
                    {
                        name: "place_birth",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "nationality",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "bi",
                        type: "varchar",
                    },
                    {
                        name: "marital_status",
                        type: "varchar",
                        // isNullable: true
                    },
                    {
                        name: "gender",
                        type: "varchar",
                    },
                    {
                        name: "address",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "contact",
                        type: "int",
                    },
                    {
                        name: "contact2",
                        type: "int",
                        isNullable: true
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "nuit",
                        type: "bigint",
                        isNullable: true
                    },
                    {
                        name: "vacation",
                        type: "int",
                        isNullable: true
                    },
                    {
                        name: "subsidy",
                        type: "double precision",
                    },
                    {
                        name: "department",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "position",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "start_date",
                        type: "date",
                        isNullable: true
                    },
                    {
                        name: "end_date",
                        type: "date",
                        isNullable: true,
                    },
                    {
                        name: "employee_status",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "bank_name",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "bank_account",
                        type: "bigint",
                        isNullable: true
                    },
                    {
                        name: "nib",
                        type: "bigint",
                        isNullable: true
                    },
                    {
                        name: "social_security",
                        type: "bigint",
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
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKEmployeeCompany",
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
            yield queryRunner.dropTable('employees');
        });
    }
}
exports.CreateEmployee1680599423740 = CreateEmployee1680599423740;
