function decorateHtmlRespons(pagetitle) {
  return function (req, res, next) {
    res.locals.html = true;
    res.locals.title = pagetitle;
    next();
  };
}

module.exports = decorateHtmlRespons;
