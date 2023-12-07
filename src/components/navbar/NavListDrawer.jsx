import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import EmailIcon from '@mui/icons-material/Email';
export default function NavListDrawer() {
  return <Box sx={{width:250, bgcolor:"lightsalmon"}}>
    <nav>
    <List>
      <ListItem>
        <ListItemIcon>
          <InboxIcon></InboxIcon>
        </ListItemIcon>
        <ListItemText primary="Inbox"></ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <EmailIcon></EmailIcon>
        </ListItemIcon>
        <ListItemText primary="Inbox"></ListItemText>
      </ListItem>
    </List>
    </nav>
    <Divider />
    <nav>
    <List>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#trash">
          <ListItemText>trash</ListItemText>
        </ListItemButton>
      </ListItem>
    </List>
    </nav>
    </Box>;
  
}