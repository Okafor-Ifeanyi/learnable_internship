import { Router } from 'express';
import { login, register } from '../controllers/user.controller';
import validate from '../middlewares/validate.middleware';
import { authSchema } from '../schema/user.schema';

const router = Router();

router.post('/register', validate(authSchema), register);

router.post('/login', validate(authSchema), login);

export default router;
