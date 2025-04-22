import AppError from '../../errors/AppError';
import prisma from '../../utils/prisma';
import { ICustomer } from './customer.interface';

const CreateCustomer = async (payload: ICustomer) => {
  const customer = await prisma.customer.create({
    data: payload,
  });

  return customer;
};

const GetCustomers = async () => {
  const customers = await prisma.customer.findMany();

  return customers;
};

const GetCustomer = async (id: string) => {
  const customer = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });

  if (!customer) {
    throw new AppError(404, 'Customer not found');
  }

  return customer;
};

const UpdateCustomer = async (id: string, payload: ICustomer) => {
  const customer = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data: payload,
  });

  return customer;
};

const DeleteCustomer = async (id: string) => {
  await prisma.customer.delete({
    where: {
      customerId: id,
    },
  });
};

const CustomerService = {
  CreateCustomer,
  GetCustomers,
  GetCustomer,
  UpdateCustomer,
  DeleteCustomer,
};

export default CustomerService;
