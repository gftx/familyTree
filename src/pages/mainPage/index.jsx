import Container from '@mui/material/Container';
import { MainPersonItem } from '../../views';
import { PERSONS } from '../../const/const';

export default function MainPage() {
  const persons = PERSONS;
  return (
    <Container 
      component="main" 
      sx={{
        mt: 8, 
        mb: 2,
        maxWidth: '80vw',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px'
      }}
    >
      {persons.map(item => (
        <MainPersonItem person={item} key={item.id} />
      ))}
    </Container>
  )
}
