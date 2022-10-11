import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

function createData(
  name: string,
  score: number,
  problem: string,
  time: number,
  memory: number,
  correct: boolean
) {
  return { name, score, problem, time, memory, correct };
}

const rows = [
  createData('zyt', 90, 'P1387 最大正方形', 2.9, 96, false),
  createData('zyt', 195, 'P2280 [HNOI2003]激光炸弹', 1.73, 200, false),
  createData('cxy', 100, 'P5441 【XR-2】伤痕', 2.4, 100, true),
  createData('qjh', 100, 'P5595 【XR-4】歌唱比赛', 0.7, 50, true),
  createData('zwx', 100, 'P2123 皇后游戏', 0.31, 10, true),
];

export default function BasicTable() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="left">score</TableCell>
            <TableCell align="left">problem</TableCell>
            <TableCell align="left">time&nbsp;(s)</TableCell>
            <TableCell align="left">memory&nbsp;(MB)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">
                <Typography
                  component="h2"
                  variant="h6"
                  color={row.correct === true ? 'green' : 'red'}
                  gutterBottom
                >
                  {row.score}
                </Typography>
              </TableCell>
              <TableCell align="left">{row.problem}</TableCell>
              <TableCell align="left">{row.time}</TableCell>
              <TableCell align="left">{row.memory}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
