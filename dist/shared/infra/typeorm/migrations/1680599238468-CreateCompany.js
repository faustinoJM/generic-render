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
exports.CreateCompany1680599238468 = void 0;
const typeorm_1 = require("typeorm");
class CreateCompany1680599238468 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'company',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'company_name',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'company_email',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'company_contact',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'company_address',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'company_city',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'company_province',
                        type: 'varchar',
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
                ]
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('company');
        });
    }
}
exports.CreateCompany1680599238468 = CreateCompany1680599238468;
