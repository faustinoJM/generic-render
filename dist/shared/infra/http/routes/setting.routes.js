"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingRouter = void 0;
const express_1 = require("express");
const CreateSettingController_1 = require("../../../../modules/settings/useCases/createSetting/CreateSettingController");
const ListSettingController_1 = require("../../../../modules/settings/useCases/listSetting/ListSettingController");
const ensureAuthenticated_1 = __importDefault(require("../middlewares/ensureAuthenticated"));
const settingRouter = (0, express_1.Router)();
exports.settingRouter = settingRouter;
const createSettingController = new CreateSettingController_1.CreateSettingController();
const listSettingController = new ListSettingController_1.ListSettingController();
// const updatePositionController = new UpdatePositionController()
settingRouter.use(ensureAuthenticated_1.default);
settingRouter.post("/", createSettingController.handle);
settingRouter.get('/', listSettingController.handle);
