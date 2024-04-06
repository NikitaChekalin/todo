import { API_CONFIG } from '@app/services/config'
import { setupInterceptorsTo } from '@share/utils'
import axios from 'axios'

export const httpClient = setupInterceptorsTo(axios.create(API_CONFIG))

export const { get, post, put, delete: destroy, patch } = httpClient
