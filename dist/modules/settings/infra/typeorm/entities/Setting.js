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
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
let Setting = class Setting {
    constructor() {
        this.id = (0, uuid_1.v4)();
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Setting.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Setting.prototype, "company_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Setting.prototype, "company_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Setting.prototype, "company_telephone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Setting.prototype, "company_contact", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Setting.prototype, "company_email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Setting.prototype, "company_website", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Setting.prototype, "company_fax", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Setting.prototype, "company_address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Setting.prototype, "company_province", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Setting.prototype, "company_city", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Setting.prototype, "postal_code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Setting.prototype, "company_country", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Setting.prototype, "company_avatar", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Setting.prototype, "payroll_total_workdays_month", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Setting.prototype, "payroll_total_workhours_day", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Setting.prototype, "overtime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Setting.prototype, "absences", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Setting.prototype, "cash_advances", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Setting.prototype, "bonus", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Setting.prototype, "backpay", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Setting.prototype, "subsidy", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Setting.prototype, "flag", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Setting.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Setting.prototype, "updated_at", void 0);
Setting = __decorate([
    (0, typeorm_1.Entity)('settings'),
    __metadata("design:paramtypes", [])
], Setting);
exports.default = Setting;
