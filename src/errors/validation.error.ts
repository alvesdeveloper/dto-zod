import { ZodError, ZodIssue } from 'zod'

export class ValidationError {
  public readonly message: string
  public readonly statusCode: number
  public readonly issues: ZodIssue[]

  constructor(error: ZodError, statusCode = 400) {
    const [firstError] = error.issues
    const { message } = firstError

    this.issues = error.issues
    this.message = message
    this.statusCode = statusCode
  }
}
