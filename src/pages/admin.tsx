import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
function Admin() {
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
    </div>
  );
}

export default Admin;
