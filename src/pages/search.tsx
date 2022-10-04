import { useLocation, useNavigate, useParams } from 'react-router-dom';

function Search() {
  let location = useLocation();
  let params = useParams();
  const { keyword } = useParams();
  console.log(location, params);
  return <div>{keyword}</div>;
}

export default Search;
