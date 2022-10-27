import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CodeEditor from '@uiw/react-textarea-code-editor';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as API from '../service/api';

function Submit() {
  const [token, setToken] = useState('');
  const [login, setLogin] = useState(false);
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('cpp');
  const { pid } = useParams();

  useEffect(() => {
    const tokenStorage = localStorage.getItem('token');
    if (tokenStorage !== null) {
      setToken(tokenStorage);
      setLogin(true);
    }
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };

  const handleSubmit = () => {
    // href to status
    API.submit({
      token: token,
      pid: parseInt(pid ?? '0'),
      code: code,
      language: language,
    })
      .then(() => {
        location.href = '/#/record';
      })
      .catch((err) => {
        alert(err);
      });
  };

  if (login === false) return <div>未登录不能提交代码！</div>;
  return (
    <div style={{ marginRight: 50 }}>
      <h2>提交题目：{pid}</h2>
      <Box sx={{ maxWidth: 150 }}>
        <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
          <InputLabel id="label">选择你的语言</InputLabel>
          <Select
            labelId="label"
            id="select"
            value={language}
            label="选择你的语言"
            onChange={handleChange}
          >
            <MenuItem value={'c'}>C</MenuItem>
            <MenuItem value={'cpp'}>C++</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div style={{ border: '1px solid gray' }}>
        <CodeEditor
          value={code}
          language={language}
          placeholder="请输入代码."
          onChange={(evn) => setCode(evn.target.value)}
          padding={15}
          style={{
            fontSize: 12,
            backgroundColor: '#d5d5d5',
            fontFamily:
              'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            minHeight: 450,
            maxHeight: 450,
          }}
        />
      </div>
      <br />
      <Button variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>
        提交
      </Button>
    </div>
  );
}

export default Submit;
