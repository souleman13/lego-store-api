/**
 * Created by Douglas on 7/13/2017.
 */
import Joi from 'joi';
import { figures } from '../../db';

export default [
  {
    method: 'POST',
    path: '/v1/figures',
    config: {
      tags: ['api'],
      validate: {
        payload: {
            name: Joi.string().trim().required,
            price: Joi.number().min(0),
            description: Joi.string(),
            imageUrl: Joi.string().uri(),
            isActive: Joi.boolean(),
        }
      }
    },
    handler: {
      async: async(req, reply) => {
        const figure = req.payload;
        const result = await figures.insert(figure);
        return reply(result).status(201);
      }
    }
  }
]
