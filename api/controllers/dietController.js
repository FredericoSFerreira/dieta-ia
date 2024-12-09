import { generateDietPlan } from '../services/geminiService.js';
import { logger } from '../utils/logger.js';

export async function generateDiet(req, res, next) {
  try {
    const userData = req.body;
    logger.info('Generating diet plan for user', { userId: userData.id });

    const dietPlan = await generateDietPlan(userData);
    
    res.json({
      success: true,
      data: dietPlan
    });
  } catch (error) {
    logger.error('Error generating diet plan', { error: error.message });
    next(error);
  }
}