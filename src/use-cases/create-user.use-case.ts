import { CreateUserRequestDto } from '../dtos/create-user-dto/create-user-request.dto'
import { CreateUserResponseDto } from '../dtos/create-user-dto/create-user-response.dto'

export class CreateUserUseCase {
  execute(data: CreateUserRequestDto) {
    //data.get('name')

    const userCreated = {
      name: 'Anderson',
      age: 25,
      pass: 'jand;kjandansdl',
      test: 123456,
    }

    return new CreateUserResponseDto(userCreated)
  }
}
