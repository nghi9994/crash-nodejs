const logger = (req, res, next) => {
  const currentTime = new Date();
  console.log(req.url, req.method, currentTime);
  next();
};

module.exports = logger;
