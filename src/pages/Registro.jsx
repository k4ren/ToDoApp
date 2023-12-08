import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box, Typography } from "@mui/material";
import { useState } from "react";
import { useSnackbar } from "notistack";


export default function Registro() {

  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    titulo: "",
    description: "",
    estado: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    enqueueSnackbar("se ha agregado una nueva tarea!", {
      severityss: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
    console.log("form:", formData);
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
        name="description"
        value={formData.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
        multiline
        rows={4}
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
        >
          <MenuItem value="pendiente">Pendiente</MenuItem>
          <MenuItem value="finalizado">Finalizado</MenuItem>
        </Select>
      </FormControl>
      <Button component="a" href="/" variant="outlined" color="error" sx={{ mt: 2, mr: 2 }}>Cancelar</Button>
      <Button type="submit" variant="contained" color="primary" sx={{mt: 2}}>Enviar</Button>
    </Box>

  </>
};
