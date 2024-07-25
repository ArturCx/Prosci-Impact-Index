import { Container } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Menu } from '@/components/Menu';

export function HomePage() {
  return (
    <>
      <Container>
        <ColorSchemeToggle />
        <Menu />
      </Container>
    </>
  );
}
