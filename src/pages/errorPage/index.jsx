import { Link, useRouteError } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container id="error-page" component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
      <Typography variant="h2" component="h1" gutterBottom>
        Ууупс!
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Извините, такой страницы не существует
      </Typography>
      <Link to={"/"}>
        <Typography variant="h6" component="h3">На главную</Typography>
      </Link>
    </Container>
  );
}