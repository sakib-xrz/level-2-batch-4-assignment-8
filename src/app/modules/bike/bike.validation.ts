import { z } from 'zod';

const CreateBikeSchema = z.object({
  body: z.object({
    brand: z
      .string({
        required_error: 'Brand is required',
        invalid_type_error: 'Brand must be a string',
      })
      .min(1, 'Brand must be at least 1 character')
      .max(255, 'Brand must be at most 255 characters'),
    model: z
      .string({
        required_error: 'Model is required',
        invalid_type_error: 'Model must be a string',
      })
      .min(1, 'Model must be at least 1 character')
      .max(255, 'Model must be at most 255 characters'),
    year: z
      .number({
        required_error: 'Year is required',
        invalid_type_error: 'Year must be a number',
      })
      .min(1900, 'Year must be at least 1900')
      .max(
        new Date().getFullYear(),
        `Year must be at most ${new Date().getFullYear()}`,
      ),
    customerId: z
      .string({
        required_error: 'Customer ID is required',
        invalid_type_error: 'Customer ID must be a string',
      })
      .uuid('Customer ID must be a valid UUID'),
  }),
});

const BikeValidation = { CreateBikeSchema };

export default BikeValidation;
