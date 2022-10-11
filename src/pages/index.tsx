import Typography from '@mui/material/Typography';
import Jump from '../components/jump';
import { useState, useEffect } from 'react';
import Calendar from '../components/calendar';
function Index() {
  const [nickname, setNickname] = useState('');
  useEffect(() => {
    setNickname(localStorage.getItem('nickname') ?? '');
  }, []);

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 5 }}>
        欢迎来到 WOJ {nickname !== '' ? ', ' + nickname : ''}
      </Typography>
      <Jump />
      <br />
      <br />
      <Calendar />
    </div>
  );
}

export default Index;
