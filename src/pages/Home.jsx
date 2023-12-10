import { Box, Checkbox, Chip, Divider, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";


export default function Home() {

  const [todos, setTodos] = useState([
    { id: 1, titulo: "Revisar Doc", estado: false, descripcion: 'revisar doc oficial', prioridad:'alta'},
    { id: 2, titulo: "Iniciar projecto", estado: true, descripcion: 'crear proyecto, revisar componentesbasicos', prioridad:'baja'},
    { id: 3, titulo: "Crear Repositorio", estado: false, descripcion: 'Crear repositorio pra subir proyecto', prioridad:'media'},
  ]);

  /* cambio de estado tarea */
  const handleToggle = (id) => {
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

  const getPriorityColor = (prioridad) => {
    switch (prioridad.toLowerCase()) {
      case "alta":
        return "#D32F2F";
      case "media":
        return "#ed6c02";
      case "baja":
        return "#59ABDB";
      default:
        return "default";
    }
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
              <Chip
              label={todo.prioridad}
              style={{ backgroundColor: getPriorityColor(todo.prioridad), color: "white" }}
            />
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