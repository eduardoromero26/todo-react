import { useEffect, useReducer } from 'react'
import { todoReducer } from '../todoReducer'

export const useTodo = () => {
    const initialState = []

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = todo => {
        const action = {
            type: 'add',
            payload: todo
        }
        dispatch(action)
    }
    const handleDeleteTodo = todoId => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action)
    }
    const handleUpdateTodo = todo => {
        const action = {
            type: 'update',
            payload: { id, description }
        }
        dispatch(action)
    }
    const handleCompleteTodo = todoId => {
        const action = {
            type: 'complete',
            payload: todoId
        }
        dispatch(action)
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleUpdateTodo,
        handleCompleteTodo
    }
}