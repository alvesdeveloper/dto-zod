import { z, ZodError, type ZodType } from 'zod'
import { ValidationError } from '../errors/validation.error'
import { AppError } from '../errors/app.error'

export abstract class AbstractDTO<Schema extends ZodType> {
  protected data: z.infer<Schema>

  public constructor(data: Record<string, unknown>) {
    this.validate(data)
  }
  protected abstract rules(): Schema

  public getAll(): z.infer<Schema> {
    return this.data
  }

  public get<key extends keyof z.infer<Schema>>(key: key) {
    return this.data[key]
  }

  private validate(data: Record<string, unknown>) {
    try {
      this.data = this.rules().parse(data)
    } catch (error) {
      console.error(error)

      if (error instanceof ZodError) {
        throw new ValidationError(error)
      }

      throw new AppError('Internal Server Error', 500)
    }
  }
}
