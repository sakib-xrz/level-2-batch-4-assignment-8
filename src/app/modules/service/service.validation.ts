import { ServiceStatus } from '@prisma/client';
import { z } from 'zod';

const CreateServiceSchema = z.object({
  body: z.object({
    bikeId: z
      .string({
        required_error: 'Bike ID is required',
        invalid_type_error: 'Bike ID must be a string',
      })
      .uuid('Invalid Bike ID format'),
    serviceDate: z
      .string({
        required_error: 'Service date is required',
        invalid_type_error: 'Service date must be a string',
      })
      .datetime('Invalid date format'),
    description: z
      .string({
        required_error: 'Description is required',
        invalid_type_error: 'Description must be a string',
      })
      .min(10, 'Description must be at least 10 characters')
      .max(500, 'Description must be at most 500 characters'),
    status: z
      .enum(
        [ServiceStatus.PENDING, ServiceStatus.IN_PROGRESS, ServiceStatus.DONE],
        {
          required_error: 'Status is required',
          invalid_type_error: 'Status must be one of the predefined values',
        },
      )
      .optional(),
  }),
});

const CompleteServiceSchema = z.object({
  body: z.object({
    completionDate: z
      .string({
        required_error: 'Completion date is required',
        invalid_type_error: 'Completion date must be a string',
      })
      .datetime('Invalid date format')
      .optional(),
  }),
});

const ServiceValidation = { CreateServiceSchema, CompleteServiceSchema };

export default ServiceValidation;
