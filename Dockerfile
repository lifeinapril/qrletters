FROM node:12-alpine
WORKDIR /qrletters
COPY ./package.json .
COPY . .
RUN npm i --legacy-peer-deps --unsafe-perm
EXPOSE 5000
CMD [ "npm", "run", "start" ]