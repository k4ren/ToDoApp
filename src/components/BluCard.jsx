import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function BluCard() {
  return (
    <Card>
      <CardActionArea>
      <CardMedia component="img"
        image="https://placehold.co/1000x200"
        height="200"
        alt="desc"
      />
      <CardContent>
        <Typography variant="5">Card title</Typography>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque optio numquam quis ratione a minus ducimus porro nesciunt! Totam tempore est odit quasi quidem repudiandae omnis. In provident culpa quis!</p>
      </CardContent>

      </CardActionArea>
      <CardActions>
        <Button variant="contained">Add</Button>
        <Button color="error">remove</Button>
      </CardActions>
    </Card>
  )
}