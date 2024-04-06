/* eslint-disable @typescript-eslint/naming-convention */
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { ROUTER_BOOK } from '@app/router/routerBook'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from '@share/components'
import { toastEndpoints, toastTypes } from '@share/components/ui/toast'
import { useCreateTodoItem, useUpdateTodoItemById } from '@share/hooks/api'

import { defaultValues, FormTodoMutationValues, todoItemValidationSchema } from '../libs'

export const useTodoForm = (values?: FormTodoMutationValues) => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { mutateAsync: createTodoItem } = useCreateTodoItem()
  const { mutateAsync: updateTodoItem } = useUpdateTodoItemById()

  const {
    control,
    handleSubmit,
    formState: { isDirty, errors },
  } = useForm<FormTodoMutationValues>({
    values: values || undefined,
    defaultValues,
    resolver: yupResolver(todoItemValidationSchema),
  })

  const onSubmit = async (todoItem: FormTodoMutationValues) => {
    if (id) {
      updateTodoItem({ ...todoItem, _id: Number(todoItem._id) })
      toast({ type: toastTypes.show, endpoint: toastEndpoints.todo.update })
    } else {
      const { _id } = await createTodoItem(todoItem)
      navigate(`${ROUTER_BOOK.TODO.INDEX}/${_id}`, { replace: true })
      toast({ type: toastTypes.show, endpoint: toastEndpoints.todo.create })
    }
  }

  return {
    control,
    isDirty,
    onSubmit,
    handleSubmit,
    errors,
  }
}
