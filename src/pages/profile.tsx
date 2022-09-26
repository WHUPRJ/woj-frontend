import { useState, useEffect } from 'react';
import * as api from '../service/api';

function Profile() {
  const [result, setResult] = useState<User>();
  // console.log(props.location);
  // const query = new URLSearchParams(props.location);
  useEffect(() => {
    const uid = 0;
    const token = localStorage.getItem('token');
    api
      .profile({
        token: token == null ? '' : token,
        uid: uid === null ? -1 : +uid,
      })
      .then((res) => {
        setResult(res);
      })
      .catch((res) => console.log(res));
  }, []);
  return (
    <div>
      username: {result?.user_name}
      <br />
      nickname: {result?.nick_name}
      <br />
      role: {result?.role}
    </div>
  );
}

export default Profile;
