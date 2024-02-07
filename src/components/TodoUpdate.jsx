import React from 'react'

export const TodoUpdate = () => {
    return (
        <form>
            <input type='text' className='inputUpdate' name='description' value='Aprender Php' placeholder='¿Qué hay que hacer?' />
            <button type='submit' className='btnEdit'>
            </button>

        </form>
    )
}