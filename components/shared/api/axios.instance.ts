import axios from 'axios'

import { ServerApi } from '@/configs/server.config'

const apiUrl = process.env.SERVER_URL ?? ServerApi

export const apiInstance = axios.create({
  baseURL: apiUrl,
  timeout: 120000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})
