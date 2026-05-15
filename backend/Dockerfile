FROM node:20

# Install Chromium and all necessary Linux libraries for Puppeteer
#RUN apt-get update && apt-get install -y \
#    gconf-service \
#    libasound2 \
#    libatk1.0-0 \
#    libc6 \
#    libcairo2 \
#    libcups2 \
#    libdbus-1-3 \
#    libexpat1 \
#    libfontconfig1 \
#    libgcc1 \
#    libgconf-2-4 \
#    libgdk-pixbuf2.0-0 \
#    libglib2.0-0 \
#    libgtk-3-0 \
#    libnspr4 \
#    libpango-1.0-0 \
#    libpangocairo-1.0-0 \
#    libstdc++6 \
#    libx11-6 \
#    libx11-xcb1 \
#    libxcb1 \
#    libxcomposite1 \
#    libxcursor1 \
#    libxdamage1 \
#    libxext6 \
#    libxfixes3 \
#    libxi6 \
#    libxrender1 \
#    libxtst6 \
#    ca-certificates \
#    fonts-liberation \
#    libnss3 \
#    lsb-release \
#    xdg-utils \
#    wget \
#    libgbm-dev \
#    libxshmfence1 \
#    chromium \
#    --no-install-recommends && rm -rf /var/lib/apt/lists/*

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
