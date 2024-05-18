export type Methods = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'

export class API {
  url?: string
  method: Methods

  constructor(method: Methods, url?: string) {
    this.url = url
    this.method = method
  }
}
