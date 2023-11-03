FROM node:21-alpine
ARG port=5173
ENV PORT=$port

# Set the working directory to /app
WORKDIR /app

RUN apk update && apk upgrade

# install vite
RUN yarn global add vite

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the current directory contents into the container at /app
COPY . .

# Build the app
RUN yarn build

# Set the command to start the app
ENTRYPOINT ["yarn", "dev", "--host=0.0.0.0"]

EXPOSE $PORT