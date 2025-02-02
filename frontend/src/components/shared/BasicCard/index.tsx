import { Card, Image, Text, Group, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { DuvidasModal } from '@/components/DuvidasModal';
import classes from './Cards.module.css';
import { MapaDeRevisãoModal } from '@/components/MapaDeRevisãoModal';
import { ReportModal } from '@/components/ReportModal';

const mockdata = {
  image: '/Card-Banner.svg',
  title: 'Impact Index',
  description: 'Este Impact Index suporta a Fase 1 - Preparing for Change na Metodologia Prosci',
};

export function BasicCard() {
  const { image, title, description } = mockdata;

  const [isDuvidasModalOpen, { close: closeDuvidasModal, open: openDuvidasModal }] =
    useDisclosure(false);

  const [
    isMapaDeRevisãoModalOpen,
    { close: closeMapaDeRevisãoModal, open: openMapaDeRevisãoModal },
  ] = useDisclosure(false);

  const [isReportModalOpen, { close: closeReportModa, open: openReportModa }] =
    useDisclosure(false);

  return (
    <>
      <DuvidasModal opened={isDuvidasModalOpen} onClose={closeDuvidasModal} />
      <MapaDeRevisãoModal opened={isMapaDeRevisãoModalOpen} onClose={closeMapaDeRevisãoModal} />
      <ReportModal opened={isReportModalOpen} onClose={closeReportModa} />
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
          <Button
            onClick={openDuvidasModal}
            color="var(--mantine-color-violet-6)"
            radius="md"
            style={{ flex: 1 }}
          >
            Dúvidas
          </Button>
          <Button
            onClick={openMapaDeRevisãoModal}
            color="var(--mantine-color-violet-7)"
            radius="md"
            style={{ flex: 1 }}
          >
            Mapa de Revisão
          </Button>
          <Button
            onClick={openReportModa}
            color="var(--mantine-color-violet-8)"
            radius="md"
            style={{ flex: 1 }}
          >
            Report
          </Button>
        </Group>
      </Card>
    </>
  );
}
