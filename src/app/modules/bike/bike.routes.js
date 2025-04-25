"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const bike_controller_1 = __importDefault(require("./bike.controller"));
const bike_validation_1 = __importDefault(require("./bike.validation"));
const router = express_1.default.Router();
router
    .route('/')
    .get(bike_controller_1.default.GetBikes)
    .post((0, validateRequest_1.default)(bike_validation_1.default.CreateBikeSchema), bike_controller_1.default.CreateBike);
router.get('/:id', bike_controller_1.default.GetBike);
exports.BikeRoutes = router;
