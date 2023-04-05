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
exports.CreatePosition1680599382680 = void 0;
const typeorm_1 = require("typeorm");
class CreatePosition1680599382680 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'positions',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'position_id',
                        type: 'int',
                        // isPrimary: true,
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
                    },
                    {
                        name: 'total_employee',
                        type: 'int',
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
                        name: "FKPositionCompany",
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
            yield queryRunner.dropTable('positions');
        });
    }
}
exports.CreatePosition1680599382680 = CreatePosition1680599382680;
