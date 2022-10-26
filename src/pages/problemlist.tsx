export default Problemlist;
import Paper from '@mui/material/Paper';
import ProblemTable from '../components/problemtable';
function Problemlist() {
  return (
    <div>
      <h2>题目列表</h2>
      <div>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <ProblemTable />
        </Paper>
      </div>
    </div>
  );
}
