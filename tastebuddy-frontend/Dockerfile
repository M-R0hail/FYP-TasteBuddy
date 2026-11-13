# Use lightweight Node.js image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy backend package files and install dependencies
COPY tastebuddy-backend/package*.json ./tastebuddy-backend/
RUN cd tastebuddy-backend && npm install

# Copy the rest of your project files
COPY . .

# Expose the application port
EXPOSE 5000

# Start the backend application
CMD ["node", "tastebuddy-backend/index.js"]