import http from "node:http";
import app from "./lib/app.js";
import dotenv from 'dotenv';

const server = http.createServer(app);

const hostname = process.env.APP_HOST || 'localhost';
const port = process.env.PORT || 8080;

server.listen(port, hostname, () => {
  console.log(`Server listening on ${JSON.stringify(server.address())}!`);
});