import { Router } from 'express';
import { listCountries } from '../modules/country/controller.js';

const router = Router();

router.get('/', listCountries);

export default router;