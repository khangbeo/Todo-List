const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

const headers = new Headers();
headers.append("Content-Type", "application/json");

export async function listTodos() {
    try {
        const url = `${API_BASE_URL}/todos`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

export async function createTodo(newTodo) {
    try {
        const url = `${API_BASE_URL}/todos`
        return await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(newTodo)
        })
    } catch (error) {
        console.log(error)
    }
}

export async function updateCompleted(todo, todoId) {
    try {
        const url = `${API_BASE_URL}/todos/${todoId}`
        return await fetch(url, {
            method: "PUT",
            headers,
            body: JSON.stringify({
                ...todo,
                completed: true
            })
        })
    } catch (error) {
        console.log(error)
    }
}

export async function deleteTodo(id) {
    try {
        const url = `${API_BASE_URL}/todos/${id}`
        return await fetch(url, {
            method: "DELETE"
        })
    } catch (error) {
        console.log(error)
    }
}