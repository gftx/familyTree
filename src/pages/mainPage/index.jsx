import Container from '@mui/material/Container';
import { FamilyTree } from '../index.js';

export default function MainPage() {
  return (
    <Container 
      component="main" 
      sx={{
        mt: 8, 
        mb: 2,
        maxWidth: '80vw',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px'
      }}
    >
      <FamilyTree />
    </Container>
  )
}
