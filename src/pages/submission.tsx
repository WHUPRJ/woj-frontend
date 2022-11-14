import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import Taskbox from '../components/taskbox';
import * as API from '../service/api';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Submission() {
  const [value, setValue] = useState(0);
  const { sid } = useParams();
  const [submission, setSubmission] = useState<Submission>();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  useEffect(() => {
    API.submission(sid)
      .then((res) => setSubmission(res))
      .catch((err) => alert(err));
  }, []);

  return (
    <div>
      <h3>提交#{submission?.submission.meta.ID}评测详情</h3>
      <Table sx={{ maxWidth: 450 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center">得分</TableCell>
            <TableCell align="center">语言</TableCell>
            <TableCell align="center">代码长度</TableCell>
            <TableCell align="center">用时</TableCell>
            <TableCell align="center">内存</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={1}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row" align="center">
              {submission?.point}
            </TableCell>
            <TableCell align="center">
              {submission?.submission.language}
            </TableCell>
            <TableCell align="center">
              {submission?.submission.code.length}
            </TableCell>
            <TableCell align="center">
              {submission?.context?.tasks.reduce(
                (time, task) => time + task.real_time,
                0
              )}
              ms
            </TableCell>
            <TableCell align="center">
              {Math.round(
                (submission?.context?.tasks.reduce(
                  (mem, task) => Math.max(mem, task.memory ?? 0),
                  0
                ) as number) / 1024
              )}
              MB
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <br />
      <Box>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="测试点信息" {...a11yProps(0)} />
          <Tab label="源代码" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {submission?.context?.tasks.map((task, index) => (
          <Taskbox key={index} task={task} />
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SyntaxHighlighter
          language={submission?.submission.language}
          PreTag="div"
        >
          {submission?.submission.code ?? ''}
        </SyntaxHighlighter>
      </TabPanel>
    </div>
  );
}

export default Submission;
