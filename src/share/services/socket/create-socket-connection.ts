import { toast } from '@share/components'
import { toastEndpoints, toastTypes } from '@share/components/ui/toast/const'
import io, { Socket } from 'socket.io-client'

export class SocketApi {
  static socket: null | Socket = null

  static createConnection() {
    this.socket = io('http://localhost:8000/')

    this.socket.on('connect', () =>
      toast({ type: toastTypes.show, endpoint: toastEndpoints.socket.connect }),
    )
    this.socket.on('disconnect', () =>
      toast({ type: toastTypes.show, endpoint: toastEndpoints.socket.disconnect }),
    )
  }
}
