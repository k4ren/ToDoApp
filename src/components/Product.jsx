import styled from "@emotion/styled";
import { Box, Button, Paper, Typography } from "@mui/material";

export default function Product() {
  const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center"
  })
  return <Paper sx={{
    display: "flex",
    alignItems: "center",
    gap: 2,
    overflow: "hidden",
    mt: 5
  }}>
    <Img
      src="https://img.freepik.com/vector-gratis/personaje-dibujos-animados-gatito-ojos-dulces_1308-133242.jpg"
      alt="gato"
    />
    <Box sx={{flexGrow:1, display:"grid", gap:2}}>
      <Typography variant="h4">Product Name</Typography>
      <Typography variant="body1">Product Description</Typography>
      <Button variant="contained">Add Card</Button>
    </Box>
    <Box sx={{mr:2}} component="p">$19.90
      {/* <Typography>Product Name</Typography> */}
    </Box>

  </Paper>
}