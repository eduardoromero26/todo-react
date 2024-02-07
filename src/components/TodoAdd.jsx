import React from 'react'

export const TodoAdd = () => {
    return (
        <form>
            <input type='text' className='inputAdd' name='description' value='Aprender Php' placeholder='¿Qué hay que hacer?' />
            <button type='submit' className='btnAdd'>Agregar</button>

        </form>
    )
}