import AppError from '../../errors/AppError';
import prisma from '../../utils/prisma';
import { IBike } from './bike.interface';

const CreateBike = async (payload: IBike) => {
  const bike = await prisma.bike.create({
    data: payload,
  });

  return bike;
};

const GetBikes = async () => {
  const bikes = await prisma.bike.findMany();

  return bikes;
};

const GetBike = async (id: string) => {
  const bike = await prisma.bike.findUnique({
    where: {
      bikeId: id,
    },
  });

  if (!bike) {
    throw new AppError(404, 'Bike not found');
  }

  return bike;
};

const BikeService = {
  CreateBike,
  GetBikes,
  GetBike,
};

export default BikeService;
