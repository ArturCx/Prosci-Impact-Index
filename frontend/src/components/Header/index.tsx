import { Button, Group, useMantineColorScheme } from '@mantine/core';
import { IconBulb, IconClock, IconMoonStars, IconPower } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import classes from './Header.module.css';
import { useAuth } from '@/store/auth';

export default function Header() {
  const { setColorScheme } = useMantineColorScheme();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <Group className={classes.outterWrapper} mt="lg" mb="lg">
        <Group>
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
        <Group>
          <Button
            size="compact-md"
            variant="transparent"
            color="blue"
            radius="xl"
            onClick={handleLogout}
          >
            <IconPower
              style={{ width: 30, height: 30 }}
              stroke={1.3}
              color="var(--mantine-color-violet-9)"
            />
          </Button>
        </Group>
      </Group>
    </>
  );
}
