import { number, object, string } from 'yup'

export const todoItemValidationSchema = object({
  _id: number().min(3).required('This field is required'),
  name: string().trim().required('This field is required'),
  description: string().trim().required('This field is required'),
  progress: number()
    .min(0)
    .max(100, 'Progress must be between 0 and 100')
    .positive("Progress can't be negative"),
})
