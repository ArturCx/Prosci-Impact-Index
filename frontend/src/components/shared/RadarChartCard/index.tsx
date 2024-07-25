import { Card, Text, Group, Button, Container } from '@mantine/core';
import { ChartRadar } from '@/components/ChartRadar';
import classes from './ChartsCard.module.css';

const mockdata = {
  image: '/Card-Banner.svg',
  title: 'Prosci PCT Assessment',
  description: 'Saúde do projeto',
};

export function RadarChartCard() {
  const { title, description } = mockdata;

  return (
    <Container className={classes.wrapper}>
      <Card withBorder radius="md" p="md" className={classes.card} mt="md">
        <Card.Section className={classes.section}>
          <ChartRadar />
        </Card.Section>
        <Card.Section className={classes.section}>
          <Group justify="center">
            <Text fz="lg" fw={500} mt="md">
              {title}
            </Text>
          </Group>
          <Group justify="center">
            <Text fz="sm" mb="xs">
              {description}
            </Text>
          </Group>
          <Group mt="xs">
            <Button color="var(--mantine-color-violet-6)" radius="md" style={{ flex: 1 }}>
              Completar Avaliação
            </Button>
          </Group>
        </Card.Section>
      </Card>
    </Container>
  );
}
