import pino from 'pino';
import pinoElastic from 'pino-elasticsearch';
import ecsFormat from '@elastic/ecs-pino-format';

export const pinoLogger = (
  elasticsearchNode: string,
  name: string,
  level: string,
  index: string = 'an-index',
  esVersion: 6 | 7 | 8 = 8
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

  return logger;
};
