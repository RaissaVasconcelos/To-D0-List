import { Content, Input, Label, ButtonDelete } from './Task.style'
import deleteIcon from '../../../public/delete.svg'

interface TaskInterface {
  id: number;
  task: string;
  completed: boolean;
}

type Props = {
  todo: TaskInterface
  onCompleteTask: (id: number) => void
  onDeleteTask: (id: number) => void
}

export function Task({ todo, onCompleteTask, onDeleteTask }: Props) {

  const handleCheck = () => {
    onCompleteTask(todo.id)
  }

  const handleDelete = () => {
    onDeleteTask(todo.id)
  } 

  return (
    <Content>
      <Label
        htmlFor={`checkbox - ${todo.id}`}
        key={todo.id}
        completed={todo.completed}
        >
          <Input
            type='checkbox'
            id={`checkbox - ${todo.id}`}
            value={todo.task}
            checked={todo.completed}
            onChange={handleCheck}
          />
        {todo.task}
      </Label>
      <ButtonDelete
        type='button'
        onClick={handleDelete}
      >
      <img src={deleteIcon} alt='icone de lixeira'/>
      </ButtonDelete>
    </Content>
  )
}