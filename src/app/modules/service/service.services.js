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
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const prisma_1 = __importDefault(require("../../utils/prisma"));
const client_1 = require("@prisma/client");
const CreateService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isServiceExist = yield prisma_1.default.service.findFirst({
        where: {
            bikeId: payload.bikeId,
            status: {
                not: 'DONE',
            },
        },
    });
    if (isServiceExist) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Service already exists for this bike');
    }
    const result = yield prisma_1.default.service.create({
        data: {
            bikeId: payload.bikeId,
            serviceDate: payload.serviceDate,
            description: payload.description,
            status: payload.status,
        },
    });
    return result;
});
const GetServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.service.findMany();
    return result;
});
const GetOlderServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.service.findMany({
        where: {
            OR: [
                {
                    status: client_1.ServiceStatus.PENDING,
                },
                {
                    status: client_1.ServiceStatus.IN_PROGRESS,
                },
            ],
            serviceDate: {
                lte: new Date(new Date().setDate(new Date().getDate() - 7)),
            },
        },
        orderBy: {
            serviceDate: 'asc',
        },
    });
    return result;
});
const GetService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.service.findUnique({
        where: {
            serviceId: id,
        },
    });
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Service not found');
    }
    return result;
});
const CompleteService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.service.update({
        where: {
            serviceId: id,
        },
        data: {
            completionDate: (payload === null || payload === void 0 ? void 0 : payload.completionDate) || new Date(),
            status: client_1.ServiceStatus.DONE,
        },
    });
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Service not found');
    }
    return result;
});
const ServiceService = {
    CreateService,
    GetServices,
    GetOlderServices,
    GetService,
    CompleteService,
};
exports.default = ServiceService;
