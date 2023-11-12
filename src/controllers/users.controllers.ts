import { Request, Response } from 'express'
import { CreateUserRequestDto } from '../dtos/create-user-dto/create-user-request.dto'
import { CreateUserUseCase } from '../use-cases/create-user.use-case'

export async function create(req: Request, res: Response) {
  const data = new CreateUserRequestDto({
    ...req.body,
  })

  const createdUserDTO = new CreateUserUseCase().execute(data)
  return res.send(createdUserDTO.getAll())
}
