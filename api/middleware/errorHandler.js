import { logger } from '../utils/logger.js';

export function errorHandler(err, req, res, next) {
  logger.error('Error occurred:', { error: err.message });

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      error: err.message
    });
  }

  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
}