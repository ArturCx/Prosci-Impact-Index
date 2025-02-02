import { Card, Text, Group, Button, Container, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import classes from './ScatterChartCard.module.css';
import { ChartScatter } from '@/components/ChartScatter';
import { ScatterBuildModal } from '@/components/ScatterBuildModal';

const mockdata = {
  image: './public/Card-Banner.svg',
  title: 'Avaliação de Risco Prosci',
  description: 'Características da Mudança e Atributos Organizacionais',
};

interface ScatterChartCardProps {
  initialButtonVisibility?: boolean;
}

export function ScatterChartCard({ initialButtonVisibility = true }: ScatterChartCardProps) {
  const { title, description } = mockdata;
  const [isAddReportModalOpen, { close: closeAddReportModal, open: openAddReportModal }] =
    useDisclosure(false);
  const [isButtonVisible, setIsButtonVisible] = useState(initialButtonVisibility);

  useEffect(() => {
    setIsButtonVisible(initialButtonVisibility);
  }, [initialButtonVisibility]);

  return (
    <Container className={classes.wrapper}>
      <ScatterBuildModal opened={isAddReportModalOpen} onClose={closeAddReportModal} />
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
            {isButtonVisible && (
              <Button
                onClick={openAddReportModal}
                color="var(--mantine-color-violet-6)"
                radius="md"
                style={{ flex: 1 }}
              >
                Completar Avaliação
              </Button>
            )}
          </Group>
        </Card.Section>
      </Card>
    </Container>
  );
}
