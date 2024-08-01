import { Container } from '@mantine/core';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Menu } from '@/components/Menu';
import { useAuth } from '@/store/auth';

export function HomePage() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <Container>
        <Header />
        <Menu />
      </Container>
    </>
  );
}
