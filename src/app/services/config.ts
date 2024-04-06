const baseURL = import.meta.env.VITE_APP_API_URL

const headers = {
  'Access-Control-Allow-Credentials': true,
  'Content-Type': 'application/json',
}

export const API_CONFIG = {
  baseURL,
  headers,
}
