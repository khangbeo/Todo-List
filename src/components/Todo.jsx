import { useState, useEffect } from 'react'
import { createTodo, deleteTodo, listTodos, updateCompleted } from '../utils/api'

export default function Todo() {

    const initialFormState = {
        text: '',
        completed: false
    }

    const [todos, setTodos] = useState([])
    const [formData, setFormData] = useState({ ...initialFormState })

    useEffect(() => {
        const abortController = new AbortController()
        getData()
        return () => abortController.abort()
    }, [])

    async function getData() {
        try {
            const response = await listTodos()
            setTodos(response)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await createTodo(formData)
        setFormData({ ...initialFormState })
        getData()
        return response
    }

    const handleDelete = async (id) => {
        try {
            await deleteTodo(id)
            await getData()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex flex-col items-center m-20 p-5 space-y-5 bg-green-500">
            <h1 className="text-center text-xl">Todos</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
                <label htmlFor="text">Add Todo {' '}</label>
                <input
                    type="text"
                    id='text'
                    name='text'
                    placeholder='Add a new Todo'
                    onChange={handleChange}
                    value={formData.text}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {todos.map((todo, index) => (
                <TodoItem todo={todo} key={index} handleDelete={handleDelete} getData={getData} />
            ))}
        </div>
    )
}

function TodoItem({ todo, handleDelete, getData }) {
    const handleUpdate = async () => {
        await updateCompleted(todo, todo.id)
        getData()
    }
    return (
        <div className='flex space-x-3'>
            <p>{todo.text}</p>
            {todo.completed ? (
                <p>Completed</p>
            ) : (
                <button onClick={handleUpdate}>Complete</button>
            )}
            <button type="button" onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
    )
}