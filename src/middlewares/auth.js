const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1] || "";
    console.log("este es el token: " + token);
    const verified = jwt.verify(token, "password");
    req.verifiedUser = verified.user;
    next();
  } catch (err) {
    console.log(err);
    next();
  }
};

module.exports = { authenticate };
//Authorization.split(" ")[1] || "";
