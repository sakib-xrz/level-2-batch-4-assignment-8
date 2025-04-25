import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import prisma from '../../utils/prisma';
import { IService } from './service.interface';
import { ServiceStatus } from '@prisma/client';

const CreateService = async (payload: IService) => {
  const isServiceExist = await prisma.service.findFirst({
    where: {
      bikeId: payload.bikeId,
      status: {
        not: 'DONE',
      },
    },
  });

  if (isServiceExist) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'Service already exists for this bike',
    );
  }

  const result = await prisma.service.create({
    data: {
      bikeId: payload.bikeId,
      serviceDate: payload.serviceDate,
      description: payload.description,
      status: payload.status,
    },
  });

  return result;
};

const GetServices = async () => {
  const result = await prisma.service.findMany();

  return result;
};

const GetOlderServices = async () => {
  const result = await prisma.service.findMany({
    where: {
      OR: [
        {
          status: ServiceStatus.PENDING,
        },
        {
          status: ServiceStatus.IN_PROGRESS,
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
};

const GetService = async (id: string) => {
  const result = await prisma.service.findUnique({
    where: {
      serviceId: id,
    },
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Service not found');
  }

  return result;
};

const CompleteService = async (
  id: string,
  payload: { completionDate?: Date | string },
) => {
  const result = await prisma.service.update({
    where: {
      serviceId: id,
    },
    data: {
      completionDate: payload?.completionDate || new Date(),
      status: ServiceStatus.DONE,
    },
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Service not found');
  }

  return result;
};

const ServiceService = {
  CreateService,
  GetServices,
  GetOlderServices,
  GetService,
  CompleteService,
};

export default ServiceService;
