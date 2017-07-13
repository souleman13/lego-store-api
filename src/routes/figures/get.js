/**
 * Created by Douglas on 7/13/2017.
 */
import Joi from 'joi';
import Boom from 'boom';
import { figures } from '../../db';

export default [
  {
    method: 'GET',
    path: '/v1/figures',
    config: {
      tags: ['api']
    },
    handler: {
      async: async(req, reply) => {
        const results = await figures.find({});
        return reply(results);
      }
    }
  },
  {
    method: 'GET',
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
        const figure = await figures.findOne({ _id: id });
        delete figure._id;
        if (!figure) {
          return reply(Boom.notFound(`Character with ${id} not found.`))
        }
        return reply(figure);
      }
    }
  }
]
