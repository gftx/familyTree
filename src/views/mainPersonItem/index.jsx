import { Avatar, Box, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


export function MainPersonItem(props) {
  const { person } = props;
  console.log(person);
  return (
    <Link to="../person/1">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          width: '200px',
          height: '350px',
          border: '1px solid #eeeeee',
          borderRadius: '15px',
          cursor: 'pointer',
          '&:hover': {
            border: '1px solid #ededed',
            opacity: [0.9, 0.8, 0.7],
          },
          p: 3
        }}
      >
        <Avatar alt="Родион Дубанов" src="src/assets/images/rodion.jpeg" />
        <Typography variant="p">Родион Дубанов</Typography>
      </Box>
    </Link>
  )
}

MainPersonItem.propTypes = {
  person: PropTypes.any
}
