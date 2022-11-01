var API = 'https://exemplo-mern-api.herokuapp.com'

export async function getAllTasks() {

    const response = await fetch(`${API}/api/tasks`);
    return await response.json();
}

export async function createTask(data) {
    const response = await fetch(`${API}/api/task`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({task: data})
    })
    return await response.json();
}

export async function deleteTask(taskId) {
    const response = await fetch(`${API}/api/task/${taskId}`, {method: 'DELETE'})
    return await response.json();
}

export async function editTask(data) {
    const response = await fetch(`${API}/api/task`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({task: data})
    })
    return await response.json();
}

export async function fetchSettings() {

    const response = await fetch(`${API}/api/settings`);
    return await response.json();
}