export const TodoReducer = (initialState, action) => {
    switch (action.type) {
        case 'add':
            return [...initialState, action.payload]
        case 'delete':
            return initialState.filter(todo => todo.id !== action.payload)
        case 'update':
            return initialState.map(todo => (todo.id === action.payload.id) ? action.payload : todo)
        case 'complete':
            return initialState.map(todo => (todo.id === action.payload) ? { ...todo, done: !todo.done } : todo)
        default:
            return initialState;
    }
}