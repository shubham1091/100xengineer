# Stage 1: Build
FROM node:20 AS build

WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the prisma directory and generate the Prisma client
COPY prisma ./prisma
RUN npx prisma generate

# Copy the rest of the application files
COPY . .

# Stage 2: Production
FROM node:20-slim AS production

WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/index.js ./
COPY --from=build /app/package*.json ./

# Expose the port your app runs on
EXPOSE 4000

# Command to run your application
CMD ["node", "index.js"]
