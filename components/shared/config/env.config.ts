const { loadEnvConfig } = require('@next/env')

loadEnvConfig(__dirname, true, {
  info: () => null,
})
