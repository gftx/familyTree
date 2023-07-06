import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import Footer from '../footer'
import Header from '../header';

export function Layout({ children }) {
  return (
    <>
      <Header />
        <Box
          sx={{
            py: 3,
            px: 5,
            minWidth: '100vw',
            minHeight: '80vh',
          }}
        >
          {children}
        </Box>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};