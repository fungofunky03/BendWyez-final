import { TopBarProvider } from './state/TopBarContext'
import { AppShell } from './components/AppShell'

export default function App() {
  return (
    <TopBarProvider>
      <AppShell />
    </TopBarProvider>
  )
}
