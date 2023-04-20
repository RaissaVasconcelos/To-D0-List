import { Section, ContentTasksDone, Content } from './SectionTasks.style'
import { Task, NoneTask } from '../../Componentes'
import { ContextToDo } from '../../Context/ToDoContext'


export function SectionTasks() {
  const { todo, completedTask, deleteTask } = ContextToDo()

  const tasksCompleted = () => {
    const arrCompleted = todo.filter((item) => item.completed === true).length
    return arrCompleted;
  }

  return (
    <Section>
        <ContentTasksDone>
          <Content>
            <p>Tarefas Criadas</p>
            <div>{todo.length}</div>
          </Content>
          <Content>
            <p>Tarefas Concluidas</p>
            <div>{tasksCompleted()} de {todo.length}</div>
          </Content>
        </ContentTasksDone>
        { todo.length > 0 ? (
        <div>
          { todo.map((todo, index) => (
            <Task
            key={index}
            todo={todo}
            onCompleteTask={completedTask}
            onDeleteTask={deleteTask}
            />
          )) }
        </div>
        ) : <NoneTask/>}
      </Section>
  )
}