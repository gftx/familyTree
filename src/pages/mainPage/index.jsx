import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
      <Typography variant="h2" component="h1" gutterBottom>
        Главная страница
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        описание
      </Typography>
      <Typography variant="body1">бади</Typography>
      <nav>
        <ul>
          <li>
            <Link to="../person/1">Your Name</Link>
          </li>
          <li>
            <Link to="../person/2">Your Name</Link>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
