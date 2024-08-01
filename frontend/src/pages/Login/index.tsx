import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { useForm } from '@mantine/form';
import { LoginPayload, useAuth } from '@/store/auth';
import classes from './Login.module.css';

export function Login() {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });

  const { login, isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home');
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = useCallback(
    (values: LoginPayload) => {
      login(values);
    },
    [login]
  );

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Bem Vindo de Volta!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Não possui uma conta ainda?{' '}
        <Anchor component="button" size="sm" c="var(--mantine-color-violet-3)">
          Criar conta
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Email"
            placeholder="exemplo@email.com"
            required
            {...form.getInputProps('email')}
          />
          <PasswordInput
            label="Senha"
            placeholder="Sua senha"
            required
            mt="md"
            {...form.getInputProps('password')}
          />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Lembrar acesso" />
            <Anchor component="button" size="sm" c="var(--mantine-color-violet-3)">
              Esqueceu a senha?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" color="var(--mantine-color-violet-6)" type="submit">
            Entrar
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
