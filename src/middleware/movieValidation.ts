import {body} from 'express-validator';
export const movieCreateValidation = () => {
  return [
    body('title').isString().withMessage("O titulo é obrigatorio").isLength({min: 2}).withMessage("O titulo deve ter no minimo 2 caracteres"),
    body('rating').isNumeric().withMessage("A avaliação é obrigatória").custom((value:number) => {
      if (value < 0 || value > 10) {
        throw new Error('A avaliação deve ser entre 0 e 10');
      }
      return true;
    }),
    body('description').isString().withMessage("A descrição é obrigatória"),
    body('director').isString().withMessage("O diretor é obrigatório"),
    body('stars').isArray().withMessage("As estrelas são obrigatórias"),
    body('poster').isURL().withMessage("Deve ser uma URL valida"),
  ];
}