FROM node:20.18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .
COPY .env .env

# Build
RUN npm run build

FROM node:20.18-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]