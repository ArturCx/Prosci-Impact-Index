import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import AuthContextProvider from './store/auth';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </MantineProvider>
  );
}
