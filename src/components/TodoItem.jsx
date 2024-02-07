import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";



export const TodoItem = () => {
    return (
        <li>
            <span>
                <label htmlFor="" className='containerDone'>Aprender Php</label>
            </span>
            <button className='btnUpdate'><FaEdit /></button>
            <button className='btnDelete'><FaTrashAlt /></button>
        </li>
    )
}