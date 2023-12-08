import { Box, Checkbox, Divider, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";


export default function Home() {

  const [todos, setTodos] = useState([
    { id: 1, titulo: "Revisar Doc", estado: false, descipcion: 'revisar doc oficial' },
    { id: 2, titulo: "Iniciar projecto", estado: true, descipcion: 'crear proyecto, revisar componentesbasicos' },
    { id: 3, titulo: "Crear Repositorio", estado: false, descipcion: 'Crear repositorio pra subir proyecto' },
  ]);

  const handleToggle = (id) => {
    // cambio de estado tarea
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, estado: !todo.estado } : todo
      )
    );
  };

  /* eliminar tarea */
  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return <>
    <Typography variant="h4" component="h2" sx={{ flexGrow: 1, mb: 2, color: "gray" }}>Lista de Tareas</Typography>
    <Box sx={{flexGrow:1, display:"grid", gap:2}}>
      <List>
        {todos.map((todo) => (
          <Box key={todo.id}>
            <ListItem sx={{ mt: 2 }}>
              <Checkbox
                checked={todo.estado}
                onChange={() => handleToggle(todo.id)}
              />
              <ListItemText primary={todo.titulo} secondary={todo.descipcion} style={{ textDecoration: todo.estado ? "line-through" : "none" }} />
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(todo.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>
    </Box>
  </>
}