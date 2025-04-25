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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("../../errors/AppError"));
const prisma_1 = __importDefault(require("../../utils/prisma"));
const CreateCustomer = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield prisma_1.default.customer.create({
        data: payload,
    });
    return customer;
});
const GetCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    const customers = yield prisma_1.default.customer.findMany();
    return customers;
});
const GetCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield prisma_1.default.customer.findUnique({
        where: {
            customerId: id,
        },
    });
    if (!customer) {
        throw new AppError_1.default(404, 'Customer not found');
    }
    return customer;
});
const UpdateCustomer = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield prisma_1.default.customer.update({
        where: {
            customerId: id,
        },
        data: payload,
    });
    return customer;
});
const DeleteCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.customer.delete({
        where: {
            customerId: id,
        },
    });
});
const CustomerService = {
    CreateCustomer,
    GetCustomers,
    GetCustomer,
    UpdateCustomer,
    DeleteCustomer,
};
exports.default = CustomerService;
