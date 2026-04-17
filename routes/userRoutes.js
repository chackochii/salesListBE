import { Router } from 'express';
import { listUsers } from '../modules/user/controller.js';

const router = Router();


router.get('/', listUsers);

export default router;