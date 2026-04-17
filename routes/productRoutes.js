import { Router } from 'express';
import { listProducts } from '../modules/product/controller.js';

const router = Router();


router.get('/', listProducts);


export default router;