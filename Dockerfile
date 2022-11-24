FROM node:16.16.0

WORKDIR /app

# Get the package.json first to install dependencies
COPY package.json /app

#  installing  those dependencies
RUN npm install

# Copy the rest of the app to the working directory
COPY . /app

# Run the container
CMD ["npm", "start"]