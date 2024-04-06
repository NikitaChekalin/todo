import { notifications } from '@mantine/notifications'
import { toastConfig, toastTypes } from './const'
import { ToastProps } from './types'

export const toast = ({ type, endpoint, message }: ToastProps) => {
  if (type === toastTypes.update) notifications.update({ ...toastConfig[endpoint], message })

  notifications.show(toastConfig[endpoint])
}
