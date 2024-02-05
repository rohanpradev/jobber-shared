import pino from 'pino';
import pinoElastic from 'pino-elasticsearch';
import ecsFormat from '@elastic/ecs-pino-format';

export const pinoLogger = (
  elasticsearchNode: string,
  name: string,
  level: string,
  index: string = 'an-index',
  esVersion: number = 8.11
): pino.Logger => {
  const streamToElastic = pinoElastic({
    node: elasticsearchNode,
    esVersion,
    flushBytes: 1000,
    index,
  });

  const logger = pino(
    {
      name,
      level,
      ...ecsFormat(),
    },
    pino.multistream([{ stream: process.stdout }, { stream: streamToElastic }])
  );

  console.log('logger options', {
    name,
    level,
    ...ecsFormat(),
  });

  return logger;
};
