import { useEffect, useState } from 'react';
import { Card, Text, Group, Input, CloseButton, Anchor } from '@mantine/core';
import classes from './TitleEditorCard.module.css';

const mockdata = {
  title: 'Projeto',
  description: 'Defina um nome para o seu projeto inserindo-o no campo abaixo.',
};

export function TitleEditorCard() {
  const { title, description } = mockdata;
  const [projectName, setProjectName] = useState('');

  useEffect(() => {
    const storedProjectName = localStorage.getItem('projectName');
    if (storedProjectName) {
      setProjectName(storedProjectName);
    }
  }, []);

  const handleInputChange = (event: { target: { value: any } }) => {
    const newValue = event.target.value;
    setProjectName(newValue);
    localStorage.setItem('projectName', newValue);
  };

  const clearInput = () => {
    setProjectName('');
    localStorage.removeItem('projectName');
  };

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
        </Group>
        <Text fz="sm" mt="xs">
          {description}
        </Text>
        <Input
          value={projectName}
          onChange={handleInputChange}
          rightSectionPointerEvents="all"
          mt="md"
          rightSection={<CloseButton aria-label="Clear input" onClick={clearInput} />}
        />
      </Card.Section>

      <Card.Section className={classes.section} mt="lg">
        <Group justify="apart">
          <Anchor>
            <Text td="underline" fz="sm">
              Termos e Condições{' '}
            </Text>
          </Anchor>
          <Text fz="xs">
            Copyright Prosci Inc. 2018. Todos os direitos reservados. Utilizado sob licença
            apropriada. v2018.5
          </Text>
        </Group>
      </Card.Section>
    </Card>
  );
}
