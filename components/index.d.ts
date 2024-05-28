// eslint-disable-next-line no-unused-vars
interface ServerResponse<T> {
  status: string
  data: T
  code: number
}

// eslint-disable-next-line no-unused-vars
interface User {
  _id: string
  email: string
  password: string
  username: string
}
