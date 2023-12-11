import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import axios from "axios";
import { useNavigate } from 'react-router-dom'



export default function Registro() {

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    estado: 0,
    prioridad: ""
  });
  const [prioridades, setPrioridades] = useState([]);
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  useEffect(() => {
    getAllPrioridades()
  }, [])

  const getAllPrioridades = async () => {
    try {
      const response = await axios.get(`${apiUrl}/prioridades`);
      
      setPrioridades(response.data)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/tareas`, formData, {
        headers: {
          'Content-Type': 'application/json'
        },
      });
      
      if (response.status === 201) {
        enqueueSnackbar("Tarea creada exitosamente", {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
        navigate('/')
      } else {
        throw new Error('Error al crear la tarea');
      }

    } catch (error) {
      console.log(error.message);
      enqueueSnackbar("Ha ocurrido un error al crear la tarea", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
    }
  };

  return <>
    <Typography variant="h4" component="h2" sx={{ flexGrow: 1, mb: 2, color: "gray" }}>Agregar Tarea</Typography>
    <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        label="Título"
        name="titulo"
        value={formData.titulo}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />

      <TextField
        label="Descripción"
        name="descripcion"
        value={formData.descripcion}
        onChange={handleChange}
        fullWidth
        margin="normal"
        multiline
        rows={4}
        required
      />

      <FormControl fullWidth margin="normal">
        <InputLabel id="estado-label">Estado</InputLabel>
        <Select
          labelId="estado-label"
          id="estado"
          name="estado"
          value={formData.estado}
          onChange={handleChange}
          label="Estado"
          required
        >
          <MenuItem value={0}>Pendiente</MenuItem>
          <MenuItem value={1}>Finalizado</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel id="prioridad-label">Prioridad</InputLabel>
        <Select
          labelId="prioridad-label"
          id="prioridad"
          name="prioridad"
          value={formData.prioridad}
          onChange={handleChange}
          label="Prioridad"
          required
        >
          {prioridades.map((prioridad) => (
            <MenuItem key={prioridad.id} value={prioridad.id}>{prioridad.nombre}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button component="a" href="/" variant="outlined" color="error" sx={{ mt: 2, mr: 2 }}>Cancelar</Button>
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Enviar</Button>
    </Box>

  </>
};
