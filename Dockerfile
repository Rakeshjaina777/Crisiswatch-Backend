# -----------------------------
# STEP 1: Build Stage
# -----------------------------
    FROM node:18-alpine AS builder

    # Set working directory
    WORKDIR /app
    
    # Copy package.json and lock files
    COPY package*.json ./
    
    # Install dependencies
    RUN npm install
    
    # Copy app source code
    COPY . .
    
    # Generate Prisma client
    RUN npx prisma generate
    
    # -----------------------------
    # STEP 2: Production Image
    # -----------------------------
    FROM node:18-alpine
    
    # Set working directory
    WORKDIR /app
    
    # Copy node_modules and built app from builder
    COPY --from=builder /app /app
    
    # Expose port (match .env PORT)
    EXPOSE 8080
    
    # Set NODE_ENV for production
    ENV NODE_ENV=production
    
    # Start the app
    CMD ["node", "index.js"]
    