/**
 * Created by Douglas on 7/13/2017.
 */
import Joi from 'joi';
import Boom from 'boom';
import { figures } from '../../db';

export default [
  {
    method: 'PUT',
    path: '/v1/figures/{id}',
    config: {
      tags: ['api'],
      validate: {
        params: {
          id: Joi.string().required()
        },
        payload: {
          name: Joi.string().trim().required,
          price: Joi.number().min(0),
          description: Joi.string(),
          imageUrl: Joi.string().uri(),
          isActive: Joi.boolean()
        }

      }
    },
    handler: {
      async: async(req, reply) => {
        const { id } = req.params;

        const found = await figures.findOne({_id: id});
        delete found._id;
        if(!found) {
          return reply(Boom.notFound('Figure not found'));
        }
        const figure = Object.assign(found, req.payload);
        const result = await figures.findOneAndUpdate({ _id: id }, { $set: figure });

        return reply(result);
      }
    }
  }
]
