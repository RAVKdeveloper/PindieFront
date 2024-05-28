import axios from 'axios'

import { ServerApi } from '@/configs/server.config'

const apiUrl = ServerApi

export const apiInstance = axios.create({
  baseURL: apiUrl,
  timeout: 120000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})
