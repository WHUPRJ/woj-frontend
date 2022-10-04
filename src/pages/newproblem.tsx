import { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import FileIcon from '@mui/icons-material/AttachFile';

function Newproblem() {
  const [role, setRole] = useState<number>();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === null) return;
    const jwtrole = (jwtDecode(token) as Token).role;
    setRole(jwtrole);
  }, []);

  if (role !== 30)
    return (
      <div>
        对不起，您不是管理员，无权创建题目！<a href="/">返回主页</a>
      </div>
    );
  else
    return (
      <div style={{ marginLeft: 20 }}>
        <h2>上传题目：</h2>
        <p>注意事项xxxxxxx </p>
        <Button variant="contained" component="label" endIcon={<FileIcon />}>
          选择zip文件
          <input hidden accept=".zip" type="file" />
        </Button>
        <br />
        <br />
        <Button variant="contained" component="label" endIcon={<SendIcon />}>
          上传
        </Button>
      </div>
    );
}

export default Newproblem;
