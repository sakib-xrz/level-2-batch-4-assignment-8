import express from 'express';

import { CustomerRoutes } from '../modules/customer/customer.routes';
import { BikeRoutes } from '../modules/bike/bike.routes';
import { ServiceRoutes } from '../modules/service/service.routes';

const router = express.Router();

type Route = {
  path: string;
  route: express.Router;
};

const routes: Route[] = [
  {
    path: '/customers',
    route: CustomerRoutes,
  },
  {
    path: '/bikes',
    route: BikeRoutes,
  },
  {
    path: '/services',
    route: ServiceRoutes,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
