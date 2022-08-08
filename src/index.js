import { server } from "./server";
import express from "express";
import {authenticate} from "./middlewares/auth";
import "./database";

const app = express();

app.use(authenticate);
app.use("/graphql", server)
app.listen(3002)
console.log("Server listening on port 3002");


// server.start({ port: 3001 }, ({ port }) => {
//   console.log("Server on port", port);
// });
