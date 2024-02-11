/**
 * Defines interfaces and error classes for custom application errors.
 */
import { StatusCodes } from 'http-status-codes';

/**
 * Interface for error response objects.
 * Defines the shape of objects returned in error responses.
 */
export interface IErrorResponse {
  message: string;
  statusCode: number;
  status: string;
  comingFrom: string;
  serializeError(): IError;
}

/**
 * Interface defining the shape of error objects.
 * Contains properties for the error message, status code, status text,
 * and origin.
 */
export interface IError {
  message: string;
  statusCode: number;
  status: string;
  comingFrom: string;
}

/**
 * Abstract base class for custom application errors.
 * Extends the native Error class.
 * Defines abstract statusCode and status properties.
 * Constructor accepts error message and origin.
 * Implements serializeError() to return IError interface.
 * Meant to be extended by concrete error classes.
 */
export abstract class CustomError extends Error {
  abstract statusCode: number;
  abstract status: string;

  constructor(message: string, protected comingFrom: string) {
    super(message);
  }

  serializeError(): IError {
    return {
      message: this.message,
      statusCode: this.statusCode,
      status: this.status,
      comingFrom: this.comingFrom,
    };
  }
}

/**
 * Extends CustomError to represent a 400 Bad Request error.
 * Sets statusCode to 400 and status to 'error'.
 */
export class BadRequestError extends CustomError {
  statusCode = StatusCodes.BAD_GATEWAY;
  status = 'error';

  constructor(message: string, comingFrom: string) {
    super(message, comingFrom);
  }
}

/**
 * Extends CustomError to represent a 404 Not Found error.
 * Sets statusCode to 404 and status to 'error'.
 */
export class NotFoundError extends CustomError {
  statusCode = StatusCodes.NOT_FOUND;
  status = 'error';

  constructor(message: string, comingFrom: string) {
    super(message, comingFrom);
  }
}

/**
 * Extends CustomError to represent a 401 Unauthorized error.
 * Sets statusCode to 401 and status to 'error'.
 */
export class NotAuthorizedError extends CustomError {
  statusCode = StatusCodes.UNAUTHORIZED;
  status = 'error';

  constructor(message: string, comingFrom: string) {
    super(message, comingFrom);
  }
}

/**
 * Extends CustomError to represent a 413 Payload Too Large error.
 * Sets statusCode to 413 and status to 'error'.
 */
export class FileTooLargeError extends CustomError {
  statusCode = StatusCodes.REQUEST_TOO_LONG;
  status = 'error';

  constructor(message: string, comingFrom: string) {
    super(message, comingFrom);
  }
}

/**
 * Extends CustomError to represent a 500 Internal Server Error.
 * Sets statusCode to 500 and status to 'error'.
 */
export class ServerError extends CustomError {
  statusCode = StatusCodes.SERVICE_UNAVAILABLE;
  status = 'error';

  constructor(message: string, comingFrom: string) {
    super(message, comingFrom);
  }
}

/**
 * Interface for error objects with errno, code, path, syscall, and stack properties.
 */
export interface ErrornoException {
  errno?: number;
  code?: string;
  path?: string;
  syscall?: string;
  stack?: string;
}
