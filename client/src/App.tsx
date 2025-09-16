import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import TaskForm from './components/TaskForm'; // Import the new form
import { Box, Typography, CircularProgress } from '@mui/material';
import { getAllTasks, createTask } from './services/taskServices.ts'; // Import createTask
import type {Task} from './types';

export default function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const fetchedTasks = await getAllTasks();
                setTasks(fetchedTasks);
            } catch (err) {
                setError('Failed to load tasks.');
            } finally {
                setIsLoading(false);
            }
        };
        fetchTasks();
    }, []); //Only run once when component mounts

    // --- ADD THIS HANDLER FUNCTION ---
    const handleAddTask = async (title: string) => {
        try {
            const newTask = await createTask(title);
            // Add the new task to the list in the UI instantly
            setTasks(prevTasks => [...prevTasks, newTask]);
        } catch (err) {
            setError('Failed to add task. Please try again.');
        }
    };

    const renderContent = () => {
        if (isLoading) return <CircularProgress />;
        if (error) return <Typography color="error">{error}</Typography>;
        return (
            <ul>
                {tasks.map(task => (
                    <li key={task.id} style={{ color: 'white' }}>
                        {task.title}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <Box sx={{ display: "flex" }}>
            <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, bgcolor: "#1f2937", minHeight: "100vh", p: 3 }}>
                <Typography variant="h4" sx={{ color: 'white', mb: 2 }}>
                    My Tasks
                </Typography>
                <TaskForm onAddTask={handleAddTask} />
                {renderContent()}
            </Box>
        </Box>
    );
}