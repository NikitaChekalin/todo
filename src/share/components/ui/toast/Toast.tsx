import { notifications } from '@mantine/notifications'

import { toastConfig, toastTypes } from './const'
import { Toast } from './types'

export const toast = ({ type, endpoint, message }: Toast) => {
  if (type === toastTypes.update) notifications.update({ ...toastConfig[endpoint], message })

  notifications.show(toastConfig[endpoint])
}
