import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function Jump() {
  const [pid, setPid] = useState(0);
  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setPid(parseInt(e.target.value));
  };
  const handleJump = () => {
    location.href = '/#/problem/' + pid;
  };

  // 随机跳题
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          跳转题目
        </Typography>
        <Input id="pid" placeholder="题目号" onChange={(e) => handleInput(e)} />
        <br />
        <br />
        <Button variant="contained" onClick={handleJump}>
          跳转
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="contained" color="error">
          随机跳题
        </Button>
      </CardContent>
    </Card>
  );
}

export default Jump;
