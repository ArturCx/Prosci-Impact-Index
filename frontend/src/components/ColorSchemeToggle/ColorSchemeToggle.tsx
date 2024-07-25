import { Button, Group, useMantineColorScheme } from '@mantine/core';
import { IconBulb, IconClock, IconMoonStars } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="right" mt="lg" mb="lg">
      <Button
        size="compact-md"
        variant="transparent"
        color="blue"
        onClick={() => setColorScheme('light')}
      >
        <IconBulb
          style={{ width: 34, height: 34 }}
          stroke={1.3}
          color="var(--mantine-color-violet-9)"
        />
      </Button>
      <Button
        size="compact-md"
        variant="transparent"
        color="blue"
        onClick={() => setColorScheme('dark')}
      >
        <IconMoonStars
          style={{ width: 30, height: 30 }}
          stroke={1.3}
          color="var(--mantine-color-violet-9)"
        />
      </Button>
      <Button
        size="compact-md"
        variant="transparent"
        color="blue"
        radius="xl"
        onClick={() => setColorScheme('auto')}
      >
        <IconClock
          style={{ width: 30, height: 30 }}
          stroke={1.3}
          color="var(--mantine-color-violet-9)"
        />
      </Button>
    </Group>
  );
}
