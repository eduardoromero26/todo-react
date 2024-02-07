import { useState } from 'react'
import './App.css'
import { TodoList } from './components/TodoList'
import { TodoAdd } from './components/TodoAdd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='cardToDo'>
        <h1>Lista de Tareas</h1>
        <div className='counterTodos'>
          <h3>N° Tareas: 4</h3>
          <h3>Pendientes: 3</h3>
        </div>
        <div className="addTodo">
          <h3>Agregar Tarea</h3>
          <TodoAdd />
        </div>
        < TodoList />
      </div>

    </>
  )
}

export default App
