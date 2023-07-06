import { useLocation } from 'react-router-dom';

export default function PersonPage() {
  const location = useLocation();
  console.log({ location });

  return (
    <div>PersonPage</div>
  )
}
