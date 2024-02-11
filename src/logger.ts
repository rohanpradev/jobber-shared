import pino from 'pino';
import pinoElastic from 'pino-elasticsearch';
import ecsFormat from '@elastic/ecs-pino-format';

/**
 * @function pinoLogger
 * This function return a logger
 * We use pino for logging
 * @param elasticsearchNode the url for elastic search
 * @param name The name of the logger
 * @param level the level of the logger such as debug, info etc
 * @param index The elastic index
 * @param esVersion Elastic search version defaults to the latest
 * @returns {pino.Logger} returns a logger 
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
