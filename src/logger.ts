import pino from 'pino';
import pinoElastic from 'pino-elasticsearch';
import ecsFormat from '@elastic/ecs-pino-format';

export const pinoLogger = (
  elasticsearchNode: string,
  name: string,
  level: string
): pino.Logger => {
  
  const streamToElastic = pinoElastic({
    node: elasticsearchNode,
    esVersion: 7,
    flushBytes: 10,
    index: 'an-index',
  });

  const logger = pino(
    {
      name,
      level,
      ...ecsFormat,
    },
    pino.multistream([{ stream: process.stdout }, { stream: streamToElastic }])
  );

  return logger;
};
