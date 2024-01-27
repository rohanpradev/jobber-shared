import pino from 'pino';
import pinoElastic from 'pino-elasticsearch';

export const pinoLogger = (
  elasticsearchNode: string,
  name: string,
  level: string
): pino.Logger => {
  const streamToElastic = pinoElastic({
    node: elasticsearchNode,
    esVersion: 7,
    flushBytes: 1000,
    index: 'an-index',
  });

  const logger = pino(
    {
      name,
      level,
    },
    pino.multistream([{ stream: process.stdout }, { stream: streamToElastic }])
  );

  return logger;
};
