FROM node:18 AS builder
WORKDIR /app
COPY package.* ./
RUN npm install

COPY . .

FROM node:18-slim

WORKDIR /app

COPY --from=builder /app .

EXPOSE 3004

CMD ["npm", "start"]
