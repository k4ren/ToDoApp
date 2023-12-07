import { Container, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Product from "./components/Product";
import BluCard from "./components/BluCard";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <Container>
      <Navbar />
      {/* <Product></Product>
      <BluCard></BluCard> */}
    </Container>
  );
}
