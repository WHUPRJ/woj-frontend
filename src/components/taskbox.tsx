import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

type IProp = {
  task: task;
};

function Taskbox(prop: IProp) {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        minWidth: 130,
        marginBottom: 3,
        marginRight: 3,
      }}
    >
      <Card
        sx={{
          minWidth: 130,
          backgroundColor: prop.task.points == 0 ? '#e74c3c' : '#52c41a',
        }}
      >
        <Tooltip
          title={'得分' + prop.task.points + '. ' + prop.task.message}
          placement="top"
        >
          <CardContent>
            <Typography sx={{ fontSize: 1 }} component="div" color="white">
              #{prop.task.id}
            </Typography>
            <Typography
              variant="h5"
              sx={{ mb: 1.5, textAlign: 'center' }}
              color="white"
            >
              {prop.task.points == 0 ? 'WA' : 'AC'}
            </Typography>
            <Typography
              sx={{ fontSize: 1, textAlign: 'center' }}
              component="div"
              color="white"
            >
              {prop.task.real_time}ms/
              {Math.round(prop.task.memory / 1024)}MB
            </Typography>
          </CardContent>
        </Tooltip>
      </Card>
    </Box>
  );
}

export default Taskbox;
