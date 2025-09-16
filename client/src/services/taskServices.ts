import type {Task} from '../types';

const API_BASE_URL = 'http://localhost:8080/api/v1/tasks';

export const getAllTasks = async (): Promise<Task[]> => {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch tasks');
    }
    return await response.json();
};

// CREATE a new task
export const createTask = async (title: string): Promise<Task> => {
    const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
    });
    if (!response.ok) {
        throw new Error('Failed to create task');
    }
    return await response.json();
};

// UPDATE a task
export const updateTask = async (id: number, updatedTask: Partial<Task>): Promise<Task> => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTask),
    });
    if (!response.ok) {
        throw new Error('Failed to update task');
    }
    return await response.json();
};

// DELETE a task
export const deleteTask = async (id: number): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete task');
    }
};