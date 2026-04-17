import { Router } from 'express';
import countryRoutes from './countryRoutes.js';
import cityRoutes from './cityRoutes.js';
import productRoutes from './productRoutes.js';
import userRoutes from './userRoutes.js';
import salesRoutes from './saleRoutes.js'

const router = Router();

router.use('/countries', countryRoutes);
router.use('/cities', cityRoutes);
router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/sales', salesRoutes); 

export default router;