import { TodoItem } from '@share/@types'
import { API_LIST } from '@share/constants'
import { get } from '@share/helpers'

export type TodosGetResponse = TodoItem[]

export const getTodosRequest = async () => {
  const { data } = await get<TodosGetResponse>(API_LIST.todos.root)

  return data
}
