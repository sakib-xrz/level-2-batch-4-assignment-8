"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const CreateCustomerSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: 'Full name is required',
            invalid_type_error: 'Full name must be a string',
        })
            .min(3, 'Full name must be at least 3 characters')
            .max(255, 'Full name must be at most 255 characters'),
        email: zod_1.z
            .string({
            required_error: 'Email is required',
            invalid_type_error: 'Email must be a string',
        })
            .email('Invalid email format'),
        phone: zod_1.z
            .string({
            required_error: 'Phone number is required',
            invalid_type_error: 'Phone number must be a string',
        })
            .min(10, 'Phone number must be at least 10 characters')
            .max(15, 'Phone number must be at most 15 characters'),
    }),
});
const UpdateCustomerSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: 'Full name is required',
            invalid_type_error: 'Full name must be a string',
        })
            .min(3, 'Full name must be at least 3 characters')
            .max(255, 'Full name must be at most 255 characters')
            .optional(),
        email: zod_1.z
            .string({
            required_error: 'Email is required',
            invalid_type_error: 'Email must be a string',
        })
            .email('Invalid email format')
            .optional(),
        phone: zod_1.z
            .string({
            required_error: 'Phone number is required',
            invalid_type_error: 'Phone number must be a string',
        })
            .min(10, 'Phone number must be at least 10 characters')
            .max(15, 'Phone number must be at most 15 characters')
            .optional(),
    }),
});
const CustomerValidation = { CreateCustomerSchema, UpdateCustomerSchema };
exports.default = CustomerValidation;
