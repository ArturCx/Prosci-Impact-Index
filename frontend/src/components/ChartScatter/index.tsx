import { ScatterChart } from '@mantine/charts';
import { data } from './data';
import classes from './ChartScatter.module.css';

export function ChartScatter() {
  return (
    <div className={classes.chartContainer}>
      <ScatterChart
        className={classes.scatterChart}
        mt="xl"
        h={350}
        miw={350}
        data={data}
        dataKey={{ x: 'age', y: 'BMI' }}
        xAxisLabel="Age"
        yAxisLabel="BMI"
        withXAxis={false}
        withYAxis={false}
        gridAxis="none"
      />
      <img className={classes.chartBackground} alt="bg" src="/Chart-background.png" />
    </div>
  );
}
