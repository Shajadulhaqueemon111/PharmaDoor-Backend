import { Router } from 'express';
import {
  createOrderController,
  getAllOredrMedicines,
  getSingleOredrMedicines,
} from './order.controller';

import { USER_ROLE } from '../user/user.constant';
import authValidateRequest from '../../middlewares/auth.validationRequest';

const router = Router();

router.post('/create', createOrderController);
router.get(
  '/ordered-medicine',
  authValidateRequest(USER_ROLE.pharmacist, USER_ROLE.admin),
  getAllOredrMedicines,
);
router.get(
  '/:id',
  authValidateRequest(USER_ROLE.pharmacist),
  getSingleOredrMedicines,
);

export const orderRoutes = router;
