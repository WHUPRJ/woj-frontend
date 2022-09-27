import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function Index() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Hi, Welcome back
          </Typography>
        </Grid>
        <Grid item xs={6} md={8}>
          <Link href="/#/problem">
            <img src="/ICPC.webp" alt="ICPC" width="700" height="300" />
          </Link>
        </Grid>
      </Grid>

      <div>
        <Button href="/#/problem">题目</Button>
      </div>
    </div>
  );
}

export default Index;
