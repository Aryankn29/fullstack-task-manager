import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

interface TaskFormProps {
    onAddTask: (title: string) => void;
}

export default function TaskForm({ onAddTask }: TaskFormProps) {
    const [title, setTitle] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!title.trim()) return; // no empty tasks
        onAddTask(title);
        setTitle(''); // clear after submit
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', gap: 2, mb: 3 }}
        >
            <TextField
                label="New Task Title"
                variant="outlined"
                size="small"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                InputLabelProps={{ sx: { color: 'white' } }}
                sx={{
                    input: { color: 'white' },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: 'gray' },
                        '&:hover fieldset': { borderColor: 'white' },
                    },
                }}
            />
            <Button type="submit" variant="contained">
                Add Task
            </Button>
        </Box>
    );
}