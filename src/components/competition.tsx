import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface IProp {
  title: string;
  type: string;
  time: string;
  school: string;
}

function Competition(prop: IProp) {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        minWidth: 230,
        marginBottom: 3,
        marginRight: 3,
      }}
    >
      <Card sx={{ minWidth: 250 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            {prop.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {prop.type}
          </Typography>
          <Typography variant="body2">
            时间：{prop.time}
            <br />
            承办方：{prop.school}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href="icpc.global">
            官网
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Competition;
