var uuid = require("uuid");
module.exports = (req, res, next) => {
  if (req.method === "POST") req.body.id = uuid.v4();

  next();
};
