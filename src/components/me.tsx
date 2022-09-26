import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import Tooltip from '@mui/material/Tooltip';

function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('nickname');
  location.href = '/';
}

function Me() {
  const username = localStorage.getItem('username') ?? '';
  const isLogined = username !== '';
  if (isLogined)
    return (
      <div>
        <Tooltip title={username}>
          <IconButton color="inherit" href={'/#/profile'}>
            <PersonIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={'注销'}>
          <IconButton color="inherit" onClick={logout}>
            <PersonOffIcon />
          </IconButton>
        </Tooltip>
      </div>
    );
  else
    return (
      <div>
        <Button href="/#/login" variant="contained">
          登录
        </Button>
        <Button href="/#/register" variant="contained">
          注册
        </Button>
      </div>
    );
}

export default Me;
