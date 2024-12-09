import express from 'express';
import { generateDiet } from '../controllers/dietController.js';
import { validateDietRequest } from '../middleware/validateRequest.js';


const router = express.Router();

router.post('/generate', validateDietRequest, generateDiet);

export { router as dietRoutes };