import Typography from '@mui/material/Typography';
import Chart from '../components/chart';
import Paper from '@mui/material/Paper';
import BasicTable from '../components/recordtable';
function Record() {
  return (
    <div>
      <div>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          周记录
        </Typography>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <Chart />
        </Paper>
      </div>
      <div>
        <Typography component="h1" variant="h5">
          提交数
        </Typography>
        <Typography component="h1" variant="h5">
          通过数
        </Typography>
      </div>
      <div>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <BasicTable />
        </Paper>
      </div>
    </div>
  );
}

export default Record;
