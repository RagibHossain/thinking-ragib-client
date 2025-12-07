import '@mantine/core/styles.css';
import { AppShell, Burger, Group, MantineProvider } from '@mantine/core';
import { BrowserRouter, Link, Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { useDisclosure } from '@mantine/hooks';
import Navbar from './components/common/Navbar';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
    <BrowserRouter>
    <AuthProvider>
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Group justify='flex-end' style={{ flex: 1}}>
              <Group ml="xl" visibleFrom="sm">
                <Navbar />
              </Group>
            </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <Navbar variant="vertical" />
      </AppShell.Navbar>

      <AppShell.Main>
        <AppRoutes />
      </AppShell.Main>
    </AppShell>
    </AuthProvider>
    </BrowserRouter>
    </>
  )
}

export default App
