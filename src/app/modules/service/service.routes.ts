import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import ServiceController from './service.controller';
import ServiceValidation from './service.validation';

const router = express.Router();

router
  .route('/')
  .post(
    validateRequest(ServiceValidation.CreateServiceSchema),
    ServiceController.CreateService,
  )
  .get(ServiceController.GetServices);

router.get('/status', ServiceController.GetOlderServices);

router.route('/:id').get(ServiceController.GetService);

router
  .route('/:id/complete')
  .put(
    validateRequest(ServiceValidation.CompleteServiceSchema),
    ServiceController.CompleteService,
  );

export const ServiceRoutes = router;
