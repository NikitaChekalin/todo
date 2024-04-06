import { toastConfig, toastTypes } from './const'

export interface ToastProps {
  type: keyof typeof toastTypes
  endpoint: keyof typeof toastConfig
  message?: string
}
