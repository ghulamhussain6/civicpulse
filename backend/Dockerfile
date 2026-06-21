FROM node:20

# Set the environment variable so Puppeteer knows where Chromium is
#ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the backend code
COPY . .

EXPOSE 3000

# Run the server
CMD ["npm", "start"]
