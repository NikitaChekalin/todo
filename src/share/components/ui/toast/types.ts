import { toastConfig, toastTypes } from './const'

export interface Toast {
  type: keyof typeof toastTypes
  endpoint: keyof typeof toastConfig
  message?: string
}
