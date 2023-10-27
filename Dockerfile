# Use an official Node runtime as a parent image
# FROM node:14-alpine
ARG port=3000
FROM node:14-slim

ENV $PORT=$port

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Build the app
RUN npm run build

# Set the command to start the app
ENTRYPOINT ["npm", "start"]

EXPOSE $PORT