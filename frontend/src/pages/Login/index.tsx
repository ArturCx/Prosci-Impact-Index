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
import classes from './Login.module.css';

export function Login() {
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Bem Vindo de Volta!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Não possui uma conta ainda?{' '}
        <Anchor size="sm" component="button">
          Criar conta
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="exemplo@email.com" required />
        <PasswordInput label="Senha" placeholder="Sua Senha" required mt="md" />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Lembrar acesso" />
          <Anchor component="button" size="sm">
            Esqueceu a senha?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl">
          Entrar
        </Button>
      </Paper>
    </Container>
  );
}
