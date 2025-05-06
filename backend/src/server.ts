import Fastify from 'fastify';
import { app } from './app';
import { env } from './config/env';

async function start() {
  const fastify = Fastify({ logger: true });

  await fastify.register(app);

  try {
    await fastify.listen({ port: Number(env.PORT), host: '0.0.0.0' });
    fastify.log.info(`🚀 Server running on http://localhost:${env.PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
