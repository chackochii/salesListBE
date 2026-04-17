import { Router } from 'express';
import { fetchFilteredCities } from '../modules/city/controller.js';

const router = Router();

router.get('/:countryId', fetchFilteredCities);

export default router;