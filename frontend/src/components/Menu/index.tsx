import { Container } from '@mantine/core';
import { BasicCard } from '@/components/shared/BasicCard';
import { TitleEditorCard } from '../shared/TitleEditorCard';
import { RadarChartCard } from '../shared/RadarChartCard';
import { ScatterChartCard } from '../shared/ScatterChartCard';
import classes from './Menu.module.css';

export function Menu() {
  return (
    <>
      <Container className={classes.wrapper}>
        <BasicCard />
        <TitleEditorCard />
      </Container>
      <Container className={classes.wrapper} mb={30}>
        <RadarChartCard />
        <ScatterChartCard />
      </Container>
    </>
  );
}
