import { useLocation, useParams } from 'react-router-dom';

function Search() {
  const location = useLocation();
  const params = useParams();
  const { keyword } = useParams();
  console.log(location, params);
  return <div>{keyword}</div>;
}

export default Search;
