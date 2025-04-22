import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import BikeService from './bike.services';

const CreateBike = catchAsync(async (req, res) => {
  const result = await BikeService.CreateBike(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Bike added successfully',
    data: result,
  });
});

const GetBikes = catchAsync(async (_req, res) => {
  const result = await BikeService.GetBikes();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Bikes fetched successfully',
    data: result,
  });
});

const GetBike = catchAsync(async (req, res) => {
  const result = await BikeService.GetBike(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Bike fetched successfully',
    data: result,
  });
});

const BikeController = {
  CreateBike,
  GetBikes,
  GetBike,
};

export default BikeController;
