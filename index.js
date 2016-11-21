module.exports = (req) => {
  return req.connection.remoteAddress;
};
