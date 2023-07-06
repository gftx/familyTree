import PropTypes from 'prop-types';

import { Footer } from '../footer'

export function Layout({ children }) {
  return (
    <>
      {children}
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