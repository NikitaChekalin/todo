import { PageContainer, PageHeader } from '@share/components'
import { TodoItemForm } from '../components/todo-item-form/form/TodoItemForm'

export const CreateTodoItem = () => (
  <PageContainer>
    <PageHeader backButton title='Todo item creating' />
    <TodoItemForm />
  </PageContainer>
)
