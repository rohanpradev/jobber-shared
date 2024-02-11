import { verify } from 'jsonwebtoken';
import type { RequestHandler } from 'express';
import { CustomError, NotAuthorizedError } from './error-handler';

/**
 * An array of valid JWT token names used in the app.
 */
const tokens = [
  'auth',
  'seller',
  'gig',
  'search',
  'buyer',
  'message',
  'order',
  'review',
];

/**
 * Middleware that verifies the gateway token in the request.
 * Throws an error if the token is invalid or missing.
 * Checks that the token payload ID is in the allowed tokens list.
 */
export const verifyGatewayRequest: RequestHandler = (req, _res, _next) => {
  const token = req.get('gatewayToken');
  if (!token)
    throw new NotAuthorizedError(
      'Invalid request',
      'Request not coming from API gateway'
    );
  try {
    const payload: { id: string; iat: string } = verify(
      token,
      'password'
    ) as unknown as { id: string; iat: string };
    if (!tokens.includes(payload.id))
      throw new NotAuthorizedError(
        'Invalid request',
        'Request payload is invalid'
      );
  } catch (error) {
    if (error instanceof CustomError) throw error;
    throw new NotAuthorizedError(
      'Invalid request',
      'Request not coming from API gateway'
    );
  }
};
