import { useForm, SubmitHandler } from 'react-hook-form'
import { useEffect, useState } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Container, Section, Content, SectionTasks, ContentTasksDone, InputText, Form } from './Home.style'
import { Header, ButtonForm, Task, NoneTask } from '../Componentes'

const TaskSchema = z.object({
  id: z.number(),
  task: z.string().min(3),
  completed: z.boolean()
})

type ITask = z.infer<typeof TaskSchema>

const InputSchema = z.object({
  input: z.string().min(3, { message: 'Required min 3 letters' })
})

type Input = z.infer<typeof InputSchema>

export default function Home() {
  const { register, handleSubmit, reset } = useForm<Input>({
    resolver: zodResolver(InputSchema)
  })

  const [task, setTask] = useState<ITask[]>([])

  const addTask = (input: string) => {
    const newTask = {
      id: Math.floor(Math.random() * 1000 + 1000),
      task: input,
      completed: false
    }
    setTask([...task, newTask])
  }

  const completedTask = (id: number) => {
    const arrChecks = task.filter((item) => {
      if (item.id === id) {
        if (item.completed) {
          item.completed = false
        } else {
          item.completed = true
        }
      }
      return true
    })
    setTask(arrChecks)
  }

  const deleteTask = (id: number) => {
    const arrChecks = task.filter((item) => item.id !== id)
    setTask(arrChecks)
  }

  const tasksCompleted = () => {
    const arrCompleted = task.filter((item) => item.completed === true).length
    return arrCompleted;
  }

  const onSubmit: SubmitHandler<Input> = (data: Input) =>  {
    const { input } = data
    addTask(input)
    reset({ input: '' })
  }

  useEffect(() => {
    tasksCompleted()
  }, [task])

  return (
    <Container>
      <Header />
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
      <SectionTasks>
        <ContentTasksDone>
          <Content>
            <p>Tarefas Criadas</p>
            <div>{task.length}</div>
          </Content>
          <Content>
            <p>Tarefas Concluidas</p>
            <div>{tasksCompleted()} de {task.length}</div>
          </Content>
        </ContentTasksDone>
        { task.length > 0 ? (
        <div>
          { task.map((task) => (
            <Task
            key={task.id}
            todo={task}
            onCompleteTask={completedTask}
            onDeleteTask={deleteTask}
            />
          )) }
        </div>
        ) : <NoneTask/>}
      </SectionTasks>
    </Container>
  )
}
