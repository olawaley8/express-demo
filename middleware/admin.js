

module.exports = function(req, res, next){
  if (!req.user.Admin) return res.status(403).send('Access denied')

  next();
}