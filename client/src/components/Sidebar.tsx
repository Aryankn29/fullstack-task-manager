import {
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from '@mui/material';
import { Dashboard, TaskAlt } from '@mui/icons-material';

const drawerWidth = 240;

export default function Sidebar() {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    bgcolor: '#111827', // Dark background for the sidebar
                    color: '#e5e7eb',   // Light text color
                },
            }}
        >
            <Toolbar />
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <Dashboard sx={{ color: '#e5e7eb' }} />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>

                <ListItemButton selected>
                    <ListItemIcon>
                        <TaskAlt sx={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText primary="Tasks" sx={{ color: '#fff' }} />
                </ListItemButton>
            </List>
        </Drawer>
    );
}