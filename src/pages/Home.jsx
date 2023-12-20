import {
  Box,
  Checkbox,
  Chip,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";

import { experimentalStyled as styled } from "@mui/material/styles";
// import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
// import Grid from '@mui/material/Grid';

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export default function Home() {
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
  const [todos, setTodos] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    getAllTodos();
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const getAllTodos = async () => {
    try {
      const response = await axios.get(`${apiUrl}/tareas`);
      setTodos(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  /* cambio de estado tarea */
  const handleToggle = (todoId, todo) => {
    axios
      .put(`${apiUrl}/tareas/${todoId}`, {
        titulo: todo.titulo,
        descripcion: todo.descripcion,
        estado: !todo.estado,
        prioridad_id: todo.prioridad.id,
      })
      .then((response) => {
        // Actualiza el estado local de la tarea
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === todoId ? { ...todo, estado: !todo.estado } : todo
          )
        );
        enqueueSnackbar("Tarea actualizada", {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      })
      .catch((error) => {
        // console.error('Error al cambiar el estado de la tarea:', error);
        enqueueSnackbar("Error al cambiar el estado de la tarea", {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      });
  };

  /* eliminar tarea */
  const handleDelete = (id) => {
    axios
      .delete(`${apiUrl}/tareas/${id}`)
      .then((response) => {
        console.log(response);
        // Actualiza el estado local de la tarea
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        enqueueSnackbar("Tarea eliminada", {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      })
      .catch((error) => {
        // console.error('Error al cambiar el estado de la tarea:', error);
        enqueueSnackbar("Error al eliminar tarea", {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      });
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

  return (
    <>
      <Typography
        variant="h4"
        component="h2"
        sx={{ flexGrow: 1, mb: 2, color: "gray" }}
      >
        Lista de Tareas
      </Typography>

      <Box sx={{ flexGrow: 1, display: "grid", gap: 2 }}>
        <List>
          {todos.map((todo) => (
            <Box
              key={todo.id}
              sx={{ height: 100 }}
            >
              <ListItem sx={{ mt: 2 }}>
                <Checkbox
                  checked={todo.estado}
                  onChange={() => handleToggle(todo.id, todo)}
                />
                <ListItemText
                  primary={todo.titulo}
                  secondary={todo.descripcion}
                  style={{
                    textDecoration: todo.estado ? "line-through" : "none",
                  }}
                />
                <Chip
                  label={todo.prioridad.nombre}
                  style={{
                    backgroundColor: getPriorityColor(todo.prioridad.nombre),
                    color: "white",
                  }}
                />
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDelete(todo.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <Divider />
            </Box>
          ))}
        </List>
      </Box>
    </>
  );
}
