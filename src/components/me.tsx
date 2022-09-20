import React from 'react';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import Tooltip from '@mui/material/Tooltip';

interface IProp {
  username?: string;
}

function Me(props: IProp): React.ReactElement {
  const tooltip = props.username ?? localStorage.getItem('username') ?? '登录';
  const isLogined = tooltip !== '登录';

  return (
    <Tooltip title={tooltip}>
      <IconButton color="inherit" href={isLogined ? '/#/register' : '/#/login'}>
        <PersonIcon />
      </IconButton>
    </Tooltip>
  );
}

export default Me;
