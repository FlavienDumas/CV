# fetching node_modules
FROM node:18.17.1-alpine3.18 as deps
WORKDIR /app
COPY package.json package.json
RUN npm i

# starting project with dev environment
FROM node:18.17.1-alpine3.18 as dev
WORKDIR /app
COPY package.json package.json
COPY --from=deps /app/node_modules node_modules 
COPY vite.config.js vite.config.js
COPY public public
COPY src src
COPY index.html index.html
CMD npm run dev

# compiling react app
FROM node:18.17.1-alpine3.18 as build
WORKDIR /app
COPY package.json package.json
COPY --from=deps /app/node_modules node_modules 
COPY vite.config.js vite.config.js
COPY public public
COPY src src
COPY index.html index.html
RUN npm run build

# starting project with prod environment
FROM node:18.17.1-alpine3.18 AS prod
WORKDIR /app
RUN npm install --global serve
COPY --from=build /app/dist dist
COPY --from=build /app/index.html index.html
CMD ["serve", "-s", "dist", "-p", "80"]
EXPOSE 80