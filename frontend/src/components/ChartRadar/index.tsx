import { RadarChart } from '@mantine/charts';
import { useRadarBuildData } from '../RadarBuildModal/useRadarBuildData';

export function ChartRadar() {
  const { data } = useRadarBuildData();

  const chartData = data.map((item, index) => ({
    product: ['L/P', 'GP', 'GM'][index],
    value: item.reduce((acc, curr) => acc + curr, 0),
  }));

  return (
    <RadarChart
      mt="xl"
      h={350}
      miw={350}
      data={chartData}
      dataKey="product"
      series={[{ name: 'value', color: 'violet.5', opacity: 0.4 }]}
    />
  );
}
