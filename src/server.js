import { createServer } from "@graphql-yoga/node";
import { useGraphQLMiddleware } from "@envelop/graphql-middleware";
import jwt from "jsonwebtoken";
import resolvers from "./graphql/resolvers";
import * as path from "path";
import * as fs from "fs";


export const server = createServer({
  schema: {
    typeDefs: fs.readFileSync(
      path.join(__dirname, "graphql/schema.graphql"),
      "utf-8"
    ),
    resolvers,
  },
 //plugins: [useGraphQLMiddleware([permissions])],
});






//server.start()

// export const server = new GraphQLServer({
//   typeDefs: path.join(__dirname, "graphql/schema.graphql"),
//   resolvers,
// });


//  const token =
//       req.headers.get("authorization").split(" ")[1] ?? null;
//     try {
//       const verified = jwt.verify(token, "password");
//       req.headers.verifiedUser = verified.user;
//       console.log(verified.user._id);
//       console.log("este es el request: "+ req.headers.verifiedUser._id);
//     } catch (err) {
//       console.log("este es el errorrrr" +err);
//     }