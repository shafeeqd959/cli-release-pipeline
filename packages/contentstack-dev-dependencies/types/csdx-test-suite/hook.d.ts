import { Interfaces } from '@oclif/core';
import { loadConfig } from './load-config';
/**
 * tests a oclif hook
 *
 * @example <caption>check that when the 'init' hook is ran it outputs "this output"</caption>
 * testHook('init', {id: 'mycommand'}, {stdout: true}, output => {
 *   expect(output.stdout).to.contain('this output')
 * })
 *
 * @param {string} event hook to run
 * @param {object} hookOpts options to pass to hook. Config object will be passed automatically.
 */
declare const _default: (event: string, hookOpts?: Record<string, unknown>, options?: loadConfig.Options) => {
    run(ctx: {
        config: Interfaces.Config;
        expectation: string;
    }): Promise<void>;
};
export default _default;
