FROM node:20-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy application code
COPY api ./api
COPY .env ./

# Set environment variables
ENV NODE_ENV=production

# Expose the API port
EXPOSE 3000

# Start the API server
CMD ["node", "api/server.js"]