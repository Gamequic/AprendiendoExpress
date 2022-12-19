function logError (err, req, res, next) {
  console.log("Funcion MiddleWare LogError ejecutada")
  //console.error(err);
  next(err);
}

//MiddleWare especializado en boom
function boomErrorHandler(err, req, res, next) {
  if (err.isBoom){  //Es boom
    const { output } = err;
    res.status(output.statusCode).json(output.payload)
  }

  //No es boom
  next(err);
}

function errorHandler(err, req, res, next) {
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

module.exports = { logError, errorHandler, boomErrorHandler }
