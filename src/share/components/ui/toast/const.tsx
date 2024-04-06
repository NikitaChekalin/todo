import { IconCheck } from '@tabler/icons-react'

export const toastTypes = { show: 'show', update: 'update' } as const

export const toastEndpoints = {
  todo: {
    create: 'todo-create',
    update: 'todo-update',
  },
  socket: {
    connect: 'socket-connection',
    disconnect: 'socket-disconnect',
  },
}

export const toastConfig = {
  [toastEndpoints.todo.create]: {
    id: 'todo-create',
    title: 'todo ',
    message: 'Todo item created',
    color: 'green',
    loading: false,
    autoClose: true,
    icon: <IconCheck size='1rem' />,
  },
  [toastEndpoints.todo.update]: {
    id: 'todo-update',
    title: 'todo',
    message: 'Todo item updated',
    color: 'green',
    loading: false,
    autoClose: true,
    icon: <IconCheck size='1rem' />,
  },
  [toastEndpoints.socket.connect]: {
    id: 'socket-connection',
    title: 'Socket.io',
    message: 'Connection established',
    color: 'green',
    loading: false,
    autoClose: true,
    icon: <IconCheck size='1rem' />,
  },
  [toastEndpoints.socket.disconnect]: {
    id: 'socket-disconnect',
    title: 'Socket.io',
    message: 'Connection closed',
    color: 'red',
    loading: false,
    autoClose: true,
    icon: <IconCheck size='1rem' />,
  },
}
