import Joi from 'joi';

const dietSchema = Joi.object({
  nome: Joi.string().required(),
  email: Joi.string().email().required(),
  idade: Joi.number().integer().min(18).max(100).required(),
  sexo: Joi.string().valid('masculino', 'feminino').required(),
  peso: Joi.number().min(30).max(300).required(),
  altura: Joi.number().integer().min(100).max(250).required(),
  objetivo: Joi.string().valid('perderPeso', 'manterPeso', 'ganharMassa').required(),
  nivelAtividade: Joi.string().valid('sedentario', 'leveAtivo', 'moderadamenteAtivo', 'muitoAtivo').required()
});

export function validateDietRequest(req, res, next) {
  const { error } = dietSchema.validate(req.body);
  
  if (error) {
    return res.status(400).json({
      success: false,
      error: error.details[0].message
    });
  }

  next();
}