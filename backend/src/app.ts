import { FastifyPluginAsync } from 'fastify';
import jwtPlugin from './config/jwt';
import fastifyCors from '@fastify/cors';
import fastifyRateLimit from '@fastify/rate-limit';
import fastifySwagger from '@fastify/swagger';
import authRoutes from './modules/auth/auth.routes';

export const app: FastifyPluginAsync = async (fastify) => {
  await fastify.register(fastifyCors);
  await fastify.register(fastifyRateLimit, {
    max: 100,
    timeWindow: '1 minute',
  });

  await fastify.register(jwtPlugin);

  await fastify.register(fastifySwagger, {
    routePrefix: '/docs',
    exposeRoute: true,
  });

  // Registrar rutas
  fastify.register(authRoutes, { prefix: '/auth' });
};
