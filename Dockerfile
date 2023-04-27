FROM node:16-alpine

# Set the working directory to /app
WORKDIR /mmm

# Copy the package.json and package-lock.json files to the container: workdir folder
COPY package*.json ./

RUN npm install

# Copy the rest of the application files in where the Dockerfile is located to the container working /mmm
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 3000
# EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
