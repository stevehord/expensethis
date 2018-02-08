/*
 *          Fatal   Error   Warn    Info    Debug   Trace   All
 * Fatal        X
 * Error        X       X
 * Warn         X       X       X
 * Info         X       X       X       X
 * Debug        X       X       X       X       X
 * Trace        X       X       X       X       X       X
 * All          X       X       X       X       x       X       X
 */


import * as log4js  from "log4js";


export default class MyLogger {
    protected logger: log4js.Logger = undefined;

    constructor(category: string) {
        this.logger = log4js.getLogger(category);
    }

    public fatal(msg: string) {
        if (this.logger.isFatalEnabled()) {
            this.logger.fatal(msg);
        }
    }

    public error(msg: string) {
        if (this.logger.isErrorEnabled()) {
            this.logger.error(msg);
        }
    }

    public warn(msg: string) {
        if (this.logger.isWarnEnabled()) {
            this.logger.warn(msg);
        }
    }

    public info(msg: string, ...args: any[]) {
        if (this.logger.isInfoEnabled()) {
            this.logger.info(msg);
        }
    }

    public debug(msg: string) {
        if (this.logger.isDebugEnabled()) {
            this.logger.debug(msg);
        }
    }

    public trace(msg: string) {
        if (this.logger.isTraceEnabled()) {
            this.logger.trace(msg);
        }
    }
}