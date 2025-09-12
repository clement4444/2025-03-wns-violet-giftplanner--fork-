FROM node:lts-alpine
RUN apk --no-cache add curl
WORKDIR /app

COPY *.json .
RUN npm i

COPY vite.config.ts .
# COPY codegen.ts .
COPY index.html .
COPY public public 
COPY src src


CMD npm run dev