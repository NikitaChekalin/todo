import { useParams } from 'react-router-dom'
import { PageContainer, PageHeader } from '@share/components'
import { useGetTodoItemById } from '@share/hooks/api'

import { TodoItemForm } from '../components'

export const EditTodoItem = () => {
  const { id } = useParams()

  const { data } = useGetTodoItemById(id as string)

  return (
    <PageContainer>
      <PageHeader backButton title='Todo item edit' />
      <TodoItemForm defaultValues={data} />
    </PageContainer>
  )
}
