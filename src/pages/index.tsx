import Typography from '@mui/material/Typography';
import Jump from '../components/jump';
import { useState, useEffect } from 'react';

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
    </div>
  );
}

export default Index;
