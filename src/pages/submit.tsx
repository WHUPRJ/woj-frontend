import CodeEditor from '@uiw/react-textarea-code-editor';
import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function Submit() {
  const [code, setCode] = React.useState('');
  const [language, setLanguage] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };
  return (
    <div style={{ marginRight: 50 }}>
      <Box sx={{ maxWidth: 100 }}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="label">语言</InputLabel>
          <Select
            labelId="label"
            id="select"
            value={language}
            label="语言"
            onChange={handleChange}
          >
            <MenuItem value={10}>CPP</MenuItem>
            <MenuItem value={20}>Python</MenuItem>
            <MenuItem value={30}>Java</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div style={{ border: '1px solid gray' }}>
        <CodeEditor
          value={code}
          language="js"
          placeholder="请输入代码."
          onChange={(evn) => setCode(evn.target.value)}
          padding={15}
          minHeight={15}
          style={{
            fontSize: 12,
            backgroundColor: '#dcdcdc',
            fontFamily:
              'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            minHeight: 15,
          }}
        />
      </div>
      <Button variant="contained" endIcon={<SendIcon />}>
        提交
      </Button>
    </div>
  );
}

export default Submit;
