import { useLocalStorage } from '@mantine/hooks';

type ScatterBuildData = number[][];

export const useScatterBuildData = () => {
  const [data, setData] = useLocalStorage<ScatterBuildData>({
    key: 'scatter-build-questions',
    defaultValue: [[], []],
  });

  return {
    data,
    setData,
  };
};
