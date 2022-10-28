import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';
import MyProblem from '../components/myproblem';
function Admin() {
  // TODO: rejudge
  return (
    <div style={{ marginLeft: 20 }}>
      <h2>管理界面</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          location.href = '/#/newproblem';
        }}
      >
        <AddIcon /> 上传新题目
      </Button>
      <br />
      <br />
      <br />
      <h3>您已经上传的题目</h3>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          marginRight: 20,
        }}
      >
        <MyProblem />
      </Paper>
    </div>
  );
}

export default Admin;
