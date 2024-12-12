import express from 'express';
import { generateDiet } from '../controllers/dietController.js';
import { validateDietRequest } from '../middleware/validateRequest.js';
import req from "express/lib/request.js";


const router = express.Router();

router.post('/generate', validateDietRequest, generateDiet);

export { router as dietRoutes };