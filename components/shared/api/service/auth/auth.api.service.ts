import { LoginUserDto, RegistrationUserDto } from '@/dto'

import { APIService } from '../../api.instance'

class AuthApiService extends APIService {
  private prefix = '/auth'

  public async login(dto: LoginUserDto) {
    const { data } = await this.api.post(`${this.prefix}/login`, dto)

    return data
  }

  public async registration(dto: RegistrationUserDto) {
    const { data } = await this.api.post(`${this.prefix}/registration`, dto)

    return data
  }

  public async me() {
    const { data } = await this.api.get(`${this.prefix}/me`)

    return data
  }
}

export default new AuthApiService()
