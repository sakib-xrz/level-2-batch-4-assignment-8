import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import CustomerValidation from './customer.validation';
import CustomerController from './customer.controller';

const router = express.Router();

router
  .route('/')
  .post(
    validateRequest(CustomerValidation.CreateCustomerSchema),
    CustomerController.CreateCustomer,
  )
  .get(CustomerController.GetCustomers);

router
  .route('/:id')
  .get(CustomerController.GetCustomer)
  .put(
    validateRequest(CustomerValidation.UpdateCustomerSchema),
    CustomerController.UpdateCustomer,
  )
  .delete(CustomerController.DeleteCustomer);

export const CustomerRoutes = router;
