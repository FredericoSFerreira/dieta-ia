import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import {rateLimit} from 'express-rate-limit';
import {dietRoutes} from './routes/dietRoutes.js';
import {errorHandler} from './middleware/errorHandler.js';
import {logger} from './utils/logger.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

// Middleware
app.use(helmet());
app.use(cors({origin: '*'}));
app.use(express.json());
app.use(limiter);

// Routes
app.use('/api/diet', dietRoutes);

app.get('/api/healthcheck', (req, res) => {
    res.send('OK')
})

// Error handling
app.use(errorHandler);

app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
});