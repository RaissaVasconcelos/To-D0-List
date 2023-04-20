import { Content, Input, Label, ButtonDelete } from './Task.style'
import deleteIcon from '../../../public/delete.svg'

interface TaskInterface {
  _id: string;
  task: string;
  completed: boolean;
}

type Props = {
  todo: TaskInterface
  onCompleteTask: (id: string) => void
  onDeleteTask: (id: string) => void
}

export function Task({ todo, onCompleteTask, onDeleteTask }: Props) {

  const handleCheck = () => {
    onCompleteTask(todo._id)
  }

  const handleDelete = () => {
    onDeleteTask(todo._id)
  } 

  return (
    <Content>
      <Label
        htmlFor={`checkbox - ${todo._id}`}
        key={todo._id}
        completed={todo.completed}
        >
          <Input
            type='checkbox'
            id={`checkbox - ${todo._id}`}
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