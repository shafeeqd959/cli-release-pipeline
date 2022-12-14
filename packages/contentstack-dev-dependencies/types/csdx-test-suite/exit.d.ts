/**
 * ensures that a oclif command or hook exits
 *
 * @param {number} code expected code
 * @default 0
 */
declare const _default: (code?: number) => {
    run(): never;
    catch(ctx: {
        error: any;
    }): void;
};
export default _default;
