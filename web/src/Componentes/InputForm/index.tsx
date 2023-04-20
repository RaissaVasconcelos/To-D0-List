import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputText, Section, Form } from './InputForm.style'
import { ButtonForm } from '../ButtonForm'
import * as z from 'zod'
import { ContextToDo } from '../../Context/ToDoContext'


const InputSchema = z.object({
  input: z.string().min(3, { message: 'Required min 3 letters' })
})

type Input = z.infer<typeof InputSchema>


export function InputForm() {
  const { register, handleSubmit, reset } = useForm<Input>({
    resolver: zodResolver(InputSchema)
  })

  const { addTask } = ContextToDo()

  const onSubmit: SubmitHandler<Input> = (data: Input) =>  {
    const { input } = data
    addTask(input)
    reset({ input: '' })
  }

  return (
    <Section>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="input_id">
              <InputText
                type='text'
                placeholder='Adicionar uma nova tarefa'
                id='input_id'
                { ...register('input') }
              />
            </label>
            <ButtonForm />
          </Form>
      </Section>
  )
} 