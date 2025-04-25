import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import ServiceService from './service.services';

const CreateService = catchAsync(async (req, res) => {
  const result = await ServiceService.CreateService(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Service record created successfully',
    data: result,
  });
});

const GetServices = catchAsync(async (_req, res) => {
  const result = await ServiceService.GetServices();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Service records fetched successfully',
    data: result,
  });
});

const GetOlderServices = catchAsync(async (_req, res) => {
  const result = await ServiceService.GetOlderServices();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Overdue or pending services fetched successfully',
    data: result,
  });
});

const GetService = catchAsync(async (req, res) => {
  const result = await ServiceService.GetService(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Service record fetched successfully',
    data: result,
  });
});

const CompleteService = catchAsync(async (req, res) => {
  const result = await ServiceService.CompleteService(req.params.id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Service marked as completed',
    data: result,
  });
});

const ServiceController = {
  CreateService,
  GetServices,
  GetOlderServices,
  GetService,
  CompleteService,
};

export default ServiceController;
