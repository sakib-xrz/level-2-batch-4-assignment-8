"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const customer_validation_1 = __importDefault(require("./customer.validation"));
const customer_controller_1 = __importDefault(require("./customer.controller"));
const router = express_1.default.Router();
router
    .route('/')
    .post((0, validateRequest_1.default)(customer_validation_1.default.CreateCustomerSchema), customer_controller_1.default.CreateCustomer)
    .get(customer_controller_1.default.GetCustomers);
router
    .route('/:id')
    .get(customer_controller_1.default.GetCustomer)
    .put((0, validateRequest_1.default)(customer_validation_1.default.UpdateCustomerSchema), customer_controller_1.default.UpdateCustomer)
    .delete(customer_controller_1.default.DeleteCustomer);
exports.CustomerRoutes = router;
