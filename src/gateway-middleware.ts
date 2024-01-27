import { verify } from 'jsonwebtoken';
import { RequestHandler } from 'express';
import { CustomError, NotAuthorizedError } from './error-handler';

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

export const verifyGatewayRequest: RequestHandler = (req, res, next) => {
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
