"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const service_controller_1 = __importDefault(require("./service.controller"));
const service_validation_1 = __importDefault(require("./service.validation"));
const router = express_1.default.Router();
router
    .route('/')
    .post((0, validateRequest_1.default)(service_validation_1.default.CreateServiceSchema), service_controller_1.default.CreateService)
    .get(service_controller_1.default.GetServices);
router.get('/status', service_controller_1.default.GetOlderServices);
router.route('/:id').get(service_controller_1.default.GetService);
router
    .route('/:id/complete')
    .put((0, validateRequest_1.default)(service_validation_1.default.CompleteServiceSchema), service_controller_1.default.CompleteService);
exports.ServiceRoutes = router;
