import pino from 'pino';
import pinoElastic from 'pino-elasticsearch';
import ecsFormat from '@elastic/ecs-pino-format';

/**
 * Creates a Pino logger instance with Elasticsearch streaming.
 *
 * @param elasticsearchNode - The Elasticsearch node URL to stream logs to.
 * @param name - The name for the logger.
 * @param level - The log level.
 * @param index - The Elasticsearch index name.
 * @param esVersion - The Elasticsearch version.
 * @returns The configured Pino logger instance.
 */
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
