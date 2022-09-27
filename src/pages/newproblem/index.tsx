import { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

function Newproblem() {
  const [role, setRole] = useState<number>();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === null) return;
    const jwtrole = (jwtDecode(token) as Token).role;
    setRole(jwtrole);
  }, []);

  return (
    <div>
      {role !== 30 &&
        '对不起，您不是管理员，无权创建题目！<a href="/">返回主页</a>'}
      {role === 30 && '创建题目'}
    </div>
  );
}

export default Newproblem;
