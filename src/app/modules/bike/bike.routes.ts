import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import BikeController from './bike.controller';
import BikeValidation from './bike.validation';

const router = express.Router();

router
  .route('/')
  .get(BikeController.GetBikes)
  .post(
    validateRequest(BikeValidation.CreateBikeSchema),
    BikeController.CreateBike,
  );

router.get('/:id', BikeController.GetBike);

export const BikeRoutes = router;
