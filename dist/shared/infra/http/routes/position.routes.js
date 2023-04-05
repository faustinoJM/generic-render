"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.positionRouter = void 0;
const express_1 = require("express");
const CreatePositionController_1 = require("../../../../modules/positions/useCases/createPosition/CreatePositionController");
const DeletePositionController_1 = require("../../../../modules/positions/useCases/deletePosition/DeletePositionController");
const ListPositionController_1 = require("../../../../modules/positions/useCases/listPosition/ListPositionController");
const SinglePositionController_1 = require("../../../../modules/positions/useCases/singlePosition/SinglePositionController");
const UpdatePositionController_1 = require("../../../../modules/positions/useCases/updatePosition/UpdatePositionController");
const ensureAuthenticated_1 = __importDefault(require("../middlewares/ensureAuthenticated"));
const positionRouter = (0, express_1.Router)();
exports.positionRouter = positionRouter;
const listPositionController = new ListPositionController_1.ListPositionController();
const createPositionController = new CreatePositionController_1.CreatePositionController();
const singlePositionController = new SinglePositionController_1.SinglePositionController();
const deletePositionController = new DeletePositionController_1.DeletePositionController();
const updatePositionController = new UpdatePositionController_1.UpdatePositionController();
positionRouter.use(ensureAuthenticated_1.default);
positionRouter.post("/", createPositionController.handle);
positionRouter.get("/", listPositionController.handle);
positionRouter.get("/:id", singlePositionController.handle);
positionRouter.delete("/:id", deletePositionController.handle);
positionRouter.put("/:id", updatePositionController.handle);
