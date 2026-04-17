import { Router } from 'express';
import { submitSale, getSalesList, getMetaData } from '../modules/sales/controller.js';

const router = Router();


router.post('/submit', submitSale);

router.get('/list', getSalesList);

router.get('/meta-data', getMetaData);


export default router;