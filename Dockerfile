FROM node:10

RUN npm install -g node-gyp
RUN useradd -u 777 -r -m -U app
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app

RUN chown -R app:app .
USER app

CMD ["npm", "start"]
