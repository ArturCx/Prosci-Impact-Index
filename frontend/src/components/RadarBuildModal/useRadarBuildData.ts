import { useLocalStorage } from '@mantine/hooks';

type RadarBuildData = number[][];

export const useRadarBuildData = () => {
  const [data, setData] = useLocalStorage<RadarBuildData>({
    key: 'radar-build-questions',
    defaultValue: [[], [], []],
  });

  return {
    data,
    setData,
  };
};
