/**
 * Created by Douglas on 7/13/2017.
 */
import Joi from 'joi';
import Boom from 'boom';
import { figures } from '../../db';

export default [
  {
    method: 'DELETE',
    path: '/v1/figures/{id}',
    config: {
      tags: ['api'],
      validate: {
        params: {
          id: Joi.string().required()
        }

      }
    },
    handler: {
      async: async(req, reply) => {
        const { id } = req.params;
        const result = await figures.findOneAndDelete({ _id: id });
        if(!result) {
          return reply(Boom.notFound('Character not found'));
        }
        return reply(result);
      }
    }
  }
]
