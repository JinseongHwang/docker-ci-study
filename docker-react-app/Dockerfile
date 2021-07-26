FROM node:alpine AS builder

RUN mkdir -p /usr/src/app/node_modules/.cache
RUN chmod -R 777 /usr/src/app

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "run", "build"]

FROM nginx

COPY --from=builder /usr/src/app/build /usr/share/nginx/html