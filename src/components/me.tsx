import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import jwtDecode from 'jwt-decode';

function Me() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [role, setRole] = useState<number>();
  const username = localStorage.getItem('username') ?? '';
  const isLogined = username !== '';
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === null) return;
    const jwtrole = (jwtDecode(token) as Token).role;
    setRole(jwtrole);
  }, []);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    setAnchorEl(null);
    location.href = '/#/profile';
  };

  const handleManage = () => {
    setAnchorEl(null);
    location.href = '/#/admin';
  };

  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('nickname');
    location.href = '/';
  };

  if (isLogined)
    // TODO: token time error...
    return (
      <div>
        <Tooltip title={username}>
          <IconButton
            color="inherit"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <PersonIcon />
          </IconButton>
        </Tooltip>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleProfile}>个人资料</MenuItem>
          {role === 30 && <MenuItem onClick={handleManage}>后台管理</MenuItem>}
          <MenuItem onClick={handleLogout}>注销</MenuItem>
        </Menu>
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
