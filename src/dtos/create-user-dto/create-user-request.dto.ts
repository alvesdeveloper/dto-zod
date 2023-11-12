import { z } from 'zod'
import { AbstractDTO } from '../abstract.dto'

const createUserSchema = z.object({
  name: z.string(),
  age: z.number(),
  pass: z.string(),
})

export class CreateUserRequestDto extends AbstractDTO<typeof createUserSchema> {
  protected rules() {
    return createUserSchema
  }
}
