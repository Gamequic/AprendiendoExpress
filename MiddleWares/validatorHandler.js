const boom = require("@hapi/boom");

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property]
    const { error } = schema.validate(data, { abortEarly: false });   //Hace confirmacion de todo y no se detiene con el primero que encuentra
    if (error){
      next(boom.badRequest(error));
    }
    next()
  }
}

module.exports = validatorHandler;
