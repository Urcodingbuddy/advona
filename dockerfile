FROM oven/bun

WORKDIR /usr/src/app

COPY . .

RUN bun install

EXPOSE 8888

CMD ["bun", "dev"]