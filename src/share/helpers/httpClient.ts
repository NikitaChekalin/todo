import axios from 'axios'

import { API_CONFIG } from '@app/services/config'
import { setupInterceptorsTo } from '@share/utils'

export const httpClient = setupInterceptorsTo(axios.create(API_CONFIG))

export const { get, post, put, delete: destroy, patch } = httpClient
