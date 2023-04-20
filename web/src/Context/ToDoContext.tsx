import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../service/api'

interface TodoProviderProps {
  children: ReactNode;
}

interface Todo {
  _id: string,
  task: string,
  completed: boolean
}

interface TodoContextType {
  todo: Todo[]
  addTask: (input: string) => void;
  completedTask: (id: string) => void
  deleteTask: (id: string) => void
}

const TodoContext = createContext<TodoContextType>({} as TodoContextType); 

export function TodoProvider({ children }: TodoProviderProps) {
  const [todo, setTodo] = useState<Todo[]>([])

  const updateTodo = async () => {
    const result = await api.get('/task')
    setTodo(result.data)
  }

  const addTask = async (input: string) => {
    const newTask = {
      task: input,
      completed: false
    }

    await api.post('/task', newTask)
    updateTodo()
  }

  const completedTask = (id: string) => {
    const arrChecks = todo.filter((item) => {
      if (item._id === id) {
        if (item.completed) {
          item.completed = false
        } else {
          item.completed = true
        }
      }
      return true
    })
    setTodo(arrChecks)
  } 

  const deleteTask = async (id: string) => {
    await api.delete(`/task/${id}`)
    updateTodo()
  }

  useEffect(() => {
    updateTodo()
  }, [])

  return (
    <TodoContext.Provider
      value={{
        todo,
        addTask,
        completedTask,
        deleteTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
} 


export function ContextToDo() {
  const context = useContext(TodoContext);
  return context;
}