import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import CustomerService from './customer.services';

const CreateCustomer = catchAsync(async (req, res) => {
  const result = await CustomerService.CreateCustomer(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Customer created successfully',
    data: result,
  });
});

const GetCustomers = catchAsync(async (_req, res) => {
  const result = await CustomerService.GetCustomers();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Customers fetched successfully',
    data: result,
  });
});

const GetCustomer = catchAsync(async (req, res) => {
  const result = await CustomerService.GetCustomer(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Customer fetched successfully',
    data: result,
  });
});

const UpdateCustomer = catchAsync(async (req, res) => {
  const result = await CustomerService.UpdateCustomer(req.params.id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Customer updated successfully',
    data: result,
  });
});

const DeleteCustomer = catchAsync(async (req, res) => {
  await CustomerService.DeleteCustomer(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Customer deleted successfully',
  });
});

const CustomerController = {
  CreateCustomer,
  GetCustomers,
  GetCustomer,
  UpdateCustomer,
  DeleteCustomer,
};

export default CustomerController;
