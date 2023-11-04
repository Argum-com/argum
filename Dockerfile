FROM node:21-alpine
ARG port=5173
ARG api_host
ENV PORT=$port
ENV VITE_API_HOST=$api_host
# Set the working directory to /app
WORKDIR /app

RUN apk update && apk upgrade

# install vite
RUN yarn global add vite

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn

# Copy the current directory contents into the container at /app
COPY . .

# Build the app
RUN yarn build

# Set the command to start the app
ENTRYPOINT ["yarn", "dev", "--host=0.0.0.0"]

EXPOSE $PORT