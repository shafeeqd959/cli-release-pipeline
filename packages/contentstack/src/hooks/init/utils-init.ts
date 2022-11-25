import { logger, messageHandler, cliux } from 'testsha-utilities';

/**
 * Initialize the utilities
 */
export default function (_opts): void {
  logger.init(this.config.context);
  messageHandler.init(this.config.context);
  cliux.init(this.config.context);
}
