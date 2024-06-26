import { useEffect, useState } from 'react'
import { SocketEvents, SocketTodoProgressData } from '@share/@types'
import { SocketApi } from '@share/services'

export const useSocketConnection = () => {
  const [socketProgressData, setSocketProgressData] = useState<SocketTodoProgressData | null>(null)

  const connectSocket = () => {
    SocketApi.createConnection()

    SocketApi?.socket?.on(SocketEvents.UPDATE_TODO_PROGRESS, (data: SocketTodoProgressData) =>
      setSocketProgressData(data),
    )
  }

  useEffect(() => {
    connectSocket()

    return () => {
      SocketApi?.socket?.off(SocketEvents.UPDATE_TODO_PROGRESS)
    }
  }, [])

  return socketProgressData
}
