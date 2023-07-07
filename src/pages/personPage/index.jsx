import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function PersonPage() {
  const location = useLocation();
  console.log({ location });

  return (
    <>
      <Link to="../main">на Главную</Link>
      <div>PersonPage</div>
    </>
  )
}
