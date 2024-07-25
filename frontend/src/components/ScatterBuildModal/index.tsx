import { IconX } from '@tabler/icons-react';
import { Box, Button, Divider, Modal, Text, SegmentedControl, NumberInput } from '@mantine/core';
import classes from './ScatterBuildModal.module.css';

interface ScatterBuildModalProps {
  opened: boolean;
  onClose: () => void;
}

export const ScatterBuildModal: React.FC<ScatterBuildModalProps> = ({ opened, onClose }) => (
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
      <SegmentedControl
        fullWidth
        withItemsBorders={false}
        data={['Liderança/Patrocínio', 'Gestão de Projetos', 'Gestão de Mudanças']}
        mb="md"
      />
      <Text className={classes.subtitle} mb="xs">
        Avalie cada fator em uma escala de 1 a 3.{' '}
      </Text>
      <Text className={classes.subtitle}>1 = inadequado | 2 = adequado | 3 = excepcional</Text>
    </div>
    <Box className={classes.divider}>
      <Divider my="xs" color="dark" />
    </Box>
    <Box className={classes.formWrapper}>
      <NumberInput
        hideControls
        label="1 → A mudança tem um sponsor primário."
        min={1}
        max={3}
        mb="md"
      />
      <NumberInput
        hideControls
        label="2 → O sponsor primário tem a autoridade necessária sobre as pessoas, processos e sistemas para autorizar e financiar a mudança."
        min={1}
        max={3}
        mb="md"
      />
      <NumberInput
        hideControls
        label="3 → O sponsor primário está disposto e é capaz de construir uma coalizão de patrocínio para a mudança e de gerenciar a resistência de outros gestores."
        min={1}
        max={3}
        mb="md"
      />
      <NumberInput
        hideControls
        label="4 → O sponsor primário participará ativamente e visivelmente com a equipe do projeto ao longo de todo o projeto."
        min={1}
        max={3}
        mb="md"
      />
      <NumberInput
        hideControls
        label="5 → O sponsor primário resolverá problemas e tomará decisões relativas ao cronograma do projeto, escopo e recursos."
        min={1}
        max={3}
        mb="md"
      />
      <NumberInput
        hideControls
        label="6 → O sponsor primário pode construir a consciência da necessidade da mudança (por que a mudança está acontecendo) diretamente com os empregados."
        min={1}
        max={3}
        mb="md"
      />
      <NumberInput
        hideControls
        label="7 → A organização tem uma definição clara da visão e estratégia."
        min={1}
        max={3}
        mb="md"
      />
      <NumberInput
        hideControls
        label="8 → Essa mudança está alinhada com a estratégia e visão da organização."
        min={1}
        max={3}
        mb="md"
      />
      <NumberInput
        hideControls
        label="9 → Prioridades foram estabelecidas e comunicadas em relação a essa mudança e outras iniciativas concorrentes."
        min={1}
        max={3}
        mb="md"
      />
      <NumberInput
        hideControls
        label="10 → O sponsor primário visivelmente reforçará a mudança e celebrará os sucessos com a equipe e a organização."
        min={1}
        max={3}
        mb="md"
      />
    </Box>
    <Box className={classes.buttonWrapper}>
      <Button
        className={classes.button}
        onClick={onClose}
        color="var(--mantine-color-violet-6)"
        radius="md"
        style={{ flex: 1 }}
      >
        Finalizar
      </Button>
    </Box>
  </Modal>
);
