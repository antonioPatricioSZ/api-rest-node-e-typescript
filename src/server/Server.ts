import express from "express";

const server = express();

server.get("/", (request, response) => {
  response.send("Teste");
});

export { server };
