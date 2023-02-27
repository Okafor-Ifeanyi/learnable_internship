import { Router } from 'express';
import { getRoomTypes, createRoomType } from '../controllers/roomType.controller';
import validate from '../middlewares/validate.middleware';
import { isAdmin, isAuth } from '../middlewares/auth.middleware';
import { createRoomTypeSchema } from '../schema/roomType.schema';

const router = Router();

router.get('/', getRoomTypes);

router.post('/', validate(createRoomTypeSchema), isAuth, isAdmin, createRoomType);

export default router;
