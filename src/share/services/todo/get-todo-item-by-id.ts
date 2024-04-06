import { TodoItem } from '@share/@types'
import { API_LIST } from '@share/constants'
import { get } from '@share/helpers'

export const getTodoItemByIdRequest = async (id: string) => {
  const { data } = await get<TodoItem>(`${API_LIST.todos.root}/${id}`)

  return data
}
