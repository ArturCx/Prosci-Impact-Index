import { RadarChart } from '@mantine/charts';
import { data } from './data';

export function ChartRadar() {
  return (
    <RadarChart
      mt="xl"
      h={350}
      miw={350}
      data={data}
      dataKey="product"
      series={[{ name: 'value', color: 'violet.5', opacity: 0.4 }]}
    />
  );
}
