
import express from 'express';
import { pageDetalleViaje, pageInicio, pageNosotros, pageTestimoniales, pageViajes } from '../controllers/pageController.js';
import { addTestimoniales } from '../controllers/testimonialesController.js';

const router = express.Router();

router.get('/',pageInicio);
router.get('/nosotros', pageNosotros);
router.get('/viajes',pageViajes);
router.get('/viajes/:slug',pageDetalleViaje);
router.get('/testimoniales',pageTestimoniales);
router.post('/testimoniales',addTestimoniales);


export default router;
