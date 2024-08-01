import { IconX } from '@tabler/icons-react';
import { Modal, Title } from '@mantine/core';
import classes from './ReporModal.module.css';
import { RadarChartCard } from '../shared/RadarChartCard';
import { ScatterChartCard } from '../shared/ScatterChartCard';

interface ModalProps {
  opened: boolean;
  onClose: () => void;
}

export const ReportModal: React.FC<ModalProps> = ({ opened, onClose }) => (
  <Modal
    radius={14}
    opened={opened}
    onClose={onClose}
    size="auto"
    transitionProps={{ transition: 'fade', duration: 600 }}
    centered
    overlayProps={{
      backgroundOpacity: 0.57,
      blur: 4,
    }}
    withCloseButton={false}
    closeOnClickOutside={false}
  >
    <div className={classes.modalheader}>
      <button type="button" className={classes.closebutton} onClick={onClose}>
        <IconX stroke={1} />
      </button>
    </div>

    <div className={classes.outerwrapper}>
      <Title order={2} mb="md">
        Reports:
      </Title>
      <div className={classes.innerwrapper}>
        <RadarChartCard initialButtonVisibility={false} />
        <ScatterChartCard initialButtonVisibility={false} />
      </div>
    </div>
  </Modal>
);
