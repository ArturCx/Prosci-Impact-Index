import { Card, Image, Text, Group, Button } from '@mantine/core';
import classes from './Cards.module.css';

const mockdata = {
  image: '/Card-Banner.svg',
  title: 'Impact Index',
  description: 'Este Impact Index suporta a Fase 1 - Preparing for Change na Metodologia Prosci',
};

export function BasicCard() {
  const { image, title, description } = mockdata;

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
        </Group>
        <Text fz="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Group mt="xs">
        <Button color="var(--mantine-color-violet-6)" radius="md" style={{ flex: 1 }}>
          Dúvidas
        </Button>
        <Button color="var(--mantine-color-violet-7)" radius="md" style={{ flex: 1 }}>
          Mapa de Revisão
        </Button>
        <Button color="var(--mantine-color-violet-8)" radius="md" style={{ flex: 1 }}>
          Report
        </Button>
      </Group>
    </Card>
  );
}
