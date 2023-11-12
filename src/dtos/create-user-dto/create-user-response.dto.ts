import { z } from 'zod'
import { AbstractDTO } from '../abstract.dto'

const createUserResponseSchema = z.object({
  name: z.string(),
  age: z.number(),
})

export class CreateUserResponseDto extends AbstractDTO<typeof createUserResponseSchema> {
  protected rules() {
    return createUserResponseSchema
  }
}
