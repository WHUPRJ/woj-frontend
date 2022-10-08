import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../service/api';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Stack from '@mui/material/Stack';

function Profile() {
  const [result, setResult] = useState<Profile>();
  const { uid } = useParams();
  // console.log(props.location);
  // const query = new URLSearchParams(props.location);
  useEffect(() => {
    const token = localStorage.getItem('token');
    api
      .profile({
        token: token == null ? '' : token,
        uid: uid === undefined || uid === null ? 0 : +uid,
      })
      .then((res) => {
        setResult(res);
      })
      .catch((res) => console.log(res));
  }, [uid]);
  return (
    <div>
      <Card
        sx={{
          display: 'flex',
          height: 300,
          marginTop: 12,
          marginLeft: 5,
          marginRight: 5,
          backgroundImage: 'url(/ICPC.webp)',
        }}
      >
        <CardContent sx={{ flex: 1, alignSelf: 'flex-end' }}>
          <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            <Avatar
              sx={{
                bgcolor: deepOrange[500],
                marginRight: 2,
                width: 56,
                height: 56,
              }}
            >
              {result?.nick_name[0]}
            </Avatar>
            <span
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: 'white',
                textShadow: 'black 0.1em 0.1em 0.2em',
              }}
            >
              {result?.nick_name}
            </span>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}

export default Profile;
