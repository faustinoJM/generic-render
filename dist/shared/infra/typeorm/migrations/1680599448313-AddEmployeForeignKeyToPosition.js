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
exports.AddEmployeForeignKeyToPosition1680599448313 = void 0;
const typeorm_1 = require("typeorm");
class AddEmployeForeignKeyToPosition1680599448313 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.addColumn('employees', new typeorm_1.TableColumn({
                name: 'position_id',
                type: 'uuid',
                isNullable: true
            }));
            yield queryRunner.createForeignKey('employees', new typeorm_1.TableForeignKey({
                name: 'FKEmployeePosition',
                columnNames: ['position_id'],
                referencedTableName: 'positions',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropForeignKey('employees', 'FKEmployeePosition');
            yield queryRunner.dropColumn('employees', 'position_id');
        });
    }
}
exports.AddEmployeForeignKeyToPosition1680599448313 = AddEmployeForeignKeyToPosition1680599448313;
