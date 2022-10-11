import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from 'recharts';

function createData(time: string, amount?: number) {
  return { time, amount };
}

const chart_data = [
  createData('Mon', 1),
  createData('Tue', 2),
  createData('Wed', 4),
  createData('Thu', 3),
  createData('Fri', 5),
  createData('Sat', 1),
  createData('Sun', 6),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <LineChart
          data={chart_data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              完成题数
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="linear"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
