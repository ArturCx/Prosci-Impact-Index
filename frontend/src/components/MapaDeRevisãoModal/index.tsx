import { IconX } from '@tabler/icons-react';
import { Modal, Image, Title } from '@mantine/core';
import classes from './MapaDeRevisãoModal.module.css';

interface ModalProps {
  opened: boolean;
  onClose: () => void;
}

export const MapaDeRevisãoModal: React.FC<ModalProps> = ({ opened, onClose }) => (
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
        Mapa de Revisão:
      </Title>
      <Image radius="md" src="/RevisionMap.png" mb="md" />
    </div>
  </Modal>
);
