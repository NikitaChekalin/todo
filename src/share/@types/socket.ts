export enum SocketEvents {
  UPDATE_TODO_PROGRESS = 'update-todo-progress',
}

export interface SocketTodoProgressData {
  _id: string
  progress: number
}
