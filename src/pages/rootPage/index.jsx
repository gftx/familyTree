// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import { Outlet } from "react-router-dom";

import { Layout } from '../../views';

export default function RootPage() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
