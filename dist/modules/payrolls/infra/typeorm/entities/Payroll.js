"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payroll = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const Employee_1 = require("../../../../employees/infra/typeorm/entities/Employee");
let Payroll = class Payroll {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid'),
    __metadata("design:type", String)
], Payroll.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payroll.prototype, "company_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payroll.prototype, "employee_uid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payroll.prototype, "employee_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payroll.prototype, "dependents", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Employee_1.Employee),
    (0, typeorm_1.JoinColumn)({ name: "employee_uid" }),
    __metadata("design:type", Employee_1.Employee)
], Payroll.prototype, "employee", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payroll.prototype, "salary_base", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payroll.prototype, "salary_liquid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payroll.prototype, "month", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payroll.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payroll.prototype, "position_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payroll.prototype, "departament_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payroll.prototype, "nib", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payroll.prototype, "social_security", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payroll.prototype, "nuit", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payroll.prototype, "overtime50", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payroll.prototype, "overtime100", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payroll.prototype, "total_overtime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payroll.prototype, "month_total_workdays", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payroll.prototype, "day_total_workhours", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payroll.prototype, "base_day", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payroll.prototype, "base_hour", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payroll.prototype, "absences", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payroll.prototype, "total_absences", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payroll.prototype, "cash_advances", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payroll.prototype, "backpay", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payroll.prototype, "bonus", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payroll.prototype, "subsidy", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payroll.prototype, "irps", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payroll.prototype, "inss_employee", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payroll.prototype, "inss_company", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Payroll.prototype, "total_income", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Payroll.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Payroll.prototype, "updated_at", void 0);
Payroll = __decorate([
    (0, typeorm_1.Entity)("payrolls"),
    __metadata("design:paramtypes", [])
], Payroll);
exports.Payroll = Payroll;
