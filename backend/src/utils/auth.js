import jwt from "jsonwebtoken";

const createUserJWT = (user) => {
  return jwt.sign({user}, "password", {
    expiresIn: "100d",
  });
};



module.exports = createUserJWT;