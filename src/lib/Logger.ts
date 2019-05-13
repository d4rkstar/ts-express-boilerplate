import * as winston from 'winston';
import * as webwinston from 'express-winston';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(winston.format.splat(), winston.format.simple()),
    transports: [new winston.transports.Console()],
});

const weblogger = webwinston.logger({
    level: 'info',
    format: winston.format.combine(winston.format.splat(), winston.format.simple()),
    transports: [new winston.transports.Console()],
    meta: true, // optional: control whether you want to log the meta data about the request (default to true)
    msg: 'HTTP {{req.method}} {{req.url}}', // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
    colorize: true, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
    ignoreRoute(req, res) {
        return false;
    },
});

export { logger, weblogger };
export default logger;
