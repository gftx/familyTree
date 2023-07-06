import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Header() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minWidth: '100vw',
        minHeight: '5vh',
      }}
    >
      <Box
        component="header"
        sx={{
          py: 2.5,
          px: 2,
          minWidth: '100vw',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h5" component="h1" sx={{ textAlign: 'center' }}>
            Семейное дерво
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}
