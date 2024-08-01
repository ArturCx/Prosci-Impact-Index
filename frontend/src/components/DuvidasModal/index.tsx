import { IconX } from '@tabler/icons-react';
import { Modal, Text, Title } from '@mantine/core';
import classes from './DuvidasModal.module.css';

interface DuvidasModalProps {
  opened: boolean;
  onClose: () => void;
}

export const DuvidasModal: React.FC<DuvidasModalProps> = ({ opened, onClose }) => (
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
        Em dúvida por onde começar?
      </Title>
      <Text className={classes.subtitle} mt="xl">
        Passo 1: Comece analisando a saúde geral do seu projeto completando o Prosci PCT Assessment.
      </Text>
      <Text className={classes.statement} mb="lg">
        <Title className={classes.why} order={4} mr="sm">
          Porque?
        </Title>
        <p>
          Esse assessment irá analisar três elementos estratégicos de um projeto que devem estar no
          lugar certo e serem fortes para alcançar o sucesso do projeto. Essa avaliação irá abordar
          se o projeto tem o foco adequado em cada uma dessas áreas.
        </p>
      </Text>
      <Text className={classes.subtitle} mt="xl">
        Passo 2: Complete a Avaliação de Risco da Prosci avaliando as Características da Mudança e
        os Atributos Organizacionais.
      </Text>
      <Text className={classes.statement} mb="lg">
        <Title className={classes.why} order={4} mr="sm">
          Porque?
        </Title>
        <p>
          Entender a escala de mudança e prontidão para a mudança da organização irá direcionar sua
          estratégia de gestão de mudanças. Isso irá ajudá-lo a escalar e obter recursos para sua
          gestão de mudanças através da compreensão do risco associado com o projeto de mudança.
        </p>
      </Text>
      <Text className={classes.subtitle} mt="xl">
        Passo 3: Complete a avaliação dos grupos para identificar o impacto da mudança por grupo.
      </Text>
      <Text className={classes.statement} mb="lg">
        <Title className={classes.why} order={4} mr="sm">
          Porque?
        </Title>
        <p>
          Se você entender melhor como cada grupo é impactado, você vai estar em um lugar melhor
          para priorizar e customizar o suporte de gestão de mudanças que você fornecerá para
          direcionar a adoção e uso suficientes.
        </p>
      </Text>
      <Text className={classes.subtitle} mt="xl">
        Passo 4: Complete a avaliação de competência do sponsor e a avaliação do sponsor primário.
      </Text>
      <Text className={classes.statement} mb="lg">
        <Title className={classes.why} order={4} mr="sm">
          Porque?
        </Title>
        <p>
          Isso permitirá que você considere todos os líderes-chave de negócio em termos de seus
          relacionamentos com o projeto. A coalisão de sponsors será um dos grandes indicadores de
          sucesso ou falha de projeto.
        </p>
      </Text>
      <Text className={classes.subtitle} mt="xl">
        Passo 5: Complete o ADKAR Analyzer
      </Text>
      <Text className={classes.statement} mb="lg">
        <Title className={classes.why} order={4} mr="sm">
          Porque?
        </Title>
        <p>
          Isso permitirá que você acompanhe o progresso dos grupos impactados durante a jornada de
          mudança e ajude-os a identificar e remover barreiras para a mudança de sucesso.
        </p>
      </Text>
    </div>
  </Modal>
);
