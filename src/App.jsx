import { Container } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Registro from "./pages/Registro";
import AddIcon from '@mui/icons-material/Add';
import { Route, Routes } from "react-router-dom";

const navArrLinks = [
  { title: "Nuevo", path: "/registro", icon: <AddIcon /> }
]

export default function App() {
  return (
    <>
      <Navbar navArrLinks={navArrLinks} />
      <Container sx={{mt:10}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </Container>
    </>
  );
}
