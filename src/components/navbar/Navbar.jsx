import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const navLinks = [
  { title: "Nuevo", path: "#nuevo", icon: <AddIcon /> }
]

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ToDo Simple App
          </Typography>
          {
            navLinks.map(item => (
              <IconButton key={item.title}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                href={item.path}
                component="a"
              >
                {item.icon}
              </IconButton>
            ))
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}