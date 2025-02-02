import { ScatterChart, ScatterChartSeries } from '@mantine/charts';
import classes from './ChartScatter.module.css';
import { useScatterBuildData } from '../ScatterBuildModal/useScatterBuildData';

export function ChartScatter() {
  const { data } = useScatterBuildData();

  const chartData: ScatterChartSeries[] = [
    {
      color: 'blue',
      name: 'Avaliação',
      data: [
        {
          'Características da Mudança': data[0].reduce((acc, curr) => acc + curr, 0),
          'Atributos Organizacionais': data[1].reduce((acc, curr) => acc + curr, 0),
        },
      ],
    },
  ];

  return (
    <div className={classes.chartContainer}>
      <ScatterChart
        className={classes.scatterChart}
        mt="xl"
        h={350}
        miw={350}
        data={chartData}
        dataKey={{ x: 'Características da Mudança', y: 'Atributos Organizacionais' }}
        referenceLines={[
          { y: 36, color: 'red.7' },
          { x: 36, color: 'red.7' },
        ]}
        xAxisLabel={`Pequena, Incremental${' ‎ '.repeat(25)}Grande, Disruptiva`}
        yAxisLabel={`${' ‎ '.repeat(5)}Resistente à Mudança`}
        xAxisProps={{
          domain: [12, 60],
        }}
        yAxisProps={{
          domain: [12, 60],
        }}
      />
    </div>
  );
}
