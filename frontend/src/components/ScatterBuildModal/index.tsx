import { IconX } from '@tabler/icons-react';
import { Box, Button, Divider, Modal, Text, SegmentedControl, Radio, Stack } from '@mantine/core';
import { useCallback, useMemo, useState } from 'react';
import { useForm } from '@mantine/form';
import classes from './ScatterBuildModal.module.css';
import questions from './questions';
import { useScatterBuildData } from './useScatterBuildData';

interface ScatterBuildModalProps {
  opened: boolean;
  onClose: () => void;
}

const initialValues = questions.reduce(
  (prev, curr, index) => ({
    ...prev,
    [index.toString()]: curr.reduce(
      (_prev, _, _index) => ({
        ..._prev,
        [_index.toString()]: '2',
      }),
      {} as { [key: string]: string }
    ),
  }),
  {} as { [key: string]: { [key: string]: string } }
);

export const ScatterBuildModal: React.FC<ScatterBuildModalProps> = ({ opened, onClose }) => {
  const [selected, setSelected] = useState<string>('0');

  const { setData } = useScatterBuildData();

  const currentQuestions = useMemo(() => questions[Number(selected)], [selected]);

  const form = useForm({
    initialValues,
    mode: 'controlled',
  });

  const handleSubmit = useCallback(() => {
    setData(
      Object.values(form.values).reduce(
        (prev, value) => [...prev, Object.values(value).map(Number)],
        [] as number[][]
      )
    );
    onClose();
  }, [form.values, onClose]);

  return (
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
          data={[
            { label: 'Avaliação Características da Mudança', value: '0' },
            { label: 'Avaliação Atributos Organizacionais', value: '1' },
          ]}
          value={selected}
          onChange={(value) => setSelected(value)}
          mb="md"
        />

        <Text className={classes.subtitle} mb="md">
          Avalie cada fator em uma escala de 1 a 5.{' '}
        </Text>
      </div>
      <Box className={classes.divider}>
        <Divider my="xs" color="dark" />
      </Box>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        {currentQuestions.map((question, index) => {
          const key = `${selected}.${index}` as `${number}.${number}`;
          return (
            <>
              <Box className={classes.boxWrapper}>
                <Radio.Group
                  key={form.key(key)}
                  label={`${index + 1} → ${question.label}`}
                  {...form.getInputProps(key)}
                >
                  <Stack className={classes.radioWrapper} my="xs">
                    <Radio value="1" label="1" />
                    <Radio value="2" label="2" />
                    <Radio value="3" label="3" />
                    <Radio value="4" label="4" />
                    <Radio value="5" label="5" />
                  </Stack>
                </Radio.Group>
              </Box>
            </>
          );
        })}
        <Box className={classes.buttonWrapper}>
          <Button
            className={classes.button}
            type="submit"
            color="var(--mantine-color-violet-6)"
            radius="md"
            style={{ flex: 1 }}
          >
            Finalizar
          </Button>
        </Box>
      </form>
    </Modal>
  );
};
