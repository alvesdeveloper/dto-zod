import type { Request, Response, NextFunction } from 'express'
import { ValidationError } from '../errors/validation.error'

export default function responseError(
  error: Error,
  _request: Request,
  response: Response,
  _next: NextFunction
): Response {
  if (error instanceof ValidationError) {
    return response.status(error.statusCode).json({
      status: 'error',
      issues: error.issues,
    })
  }

  console.error('internal server error', error)

  return response.status(500).json({
    status: 'error',
    message: 'internal server error',
  })
}
