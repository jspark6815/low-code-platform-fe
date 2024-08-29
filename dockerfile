FROM node-base-20

COPY ./lowcode-connect-platform/ /app

RUN npm run build

CMD ["npm", "start"]