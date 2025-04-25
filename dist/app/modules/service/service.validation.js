"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const CreateServiceSchema = zod_1.z.object({
    body: zod_1.z.object({
        bikeId: zod_1.z
            .string({
            required_error: 'Bike ID is required',
            invalid_type_error: 'Bike ID must be a string',
        })
            .uuid('Invalid Bike ID format'),
        serviceDate: zod_1.z
            .string({
            required_error: 'Service date is required',
            invalid_type_error: 'Service date must be a string',
        })
            .datetime('Invalid date format'),
        description: zod_1.z
            .string({
            required_error: 'Description is required',
            invalid_type_error: 'Description must be a string',
        })
            .min(10, 'Description must be at least 10 characters')
            .max(500, 'Description must be at most 500 characters'),
        status: zod_1.z
            .enum([client_1.ServiceStatus.PENDING, client_1.ServiceStatus.IN_PROGRESS, client_1.ServiceStatus.DONE], {
            required_error: 'Status is required',
            invalid_type_error: 'Status must be one of the predefined values',
        })
            .optional(),
    }),
});
const CompleteServiceSchema = zod_1.z.object({
    body: zod_1.z.object({
        completionDate: zod_1.z
            .string({
            required_error: 'Completion date is required',
            invalid_type_error: 'Completion date must be a string',
        })
            .datetime('Invalid date format')
            .optional(),
    }),
});
const ServiceValidation = { CreateServiceSchema, CompleteServiceSchema };
exports.default = ServiceValidation;
