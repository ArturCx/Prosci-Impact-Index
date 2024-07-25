import { Card, Text, Group, Button, Container, Box } from '@mantine/core';
import classes from './ScatterChartCard.module.css';
import { ChartScatter } from '@/components/ChartScatter';

const mockdata = {
  image: './public/Card-Banner.svg',
  title: 'Avaliação de Risco Prosci',
  description: 'Características da Mudança e Atributos Organizacionais',
};

export function ScatterChartCard() {
  const { title, description } = mockdata;

  return (
    <Container className={classes.wrapper}>
      <Card withBorder radius="md" p="md" className={classes.card} mt="md">
        <Card.Section className={classes.section}>
          <Box className={classes.chartbox}>
            <ChartScatter />
          </Box>
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
