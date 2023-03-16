FROM  node:18.15-alpine3.17
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
EXPOSE 3000
