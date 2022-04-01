var slugid = require("slugid");

module.exports = (req, res, next) => {
  if (req.method === "POST") req.body.id = slugid.v4();
  next();
};
