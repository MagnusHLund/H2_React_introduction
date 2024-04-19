import { Route, Routes } from 'react-router-dom'
import Navbar, { navbarPage } from './Components/Navbar'
import TimeSection from './Components/Sections/TimerSection'
import FormSection from './Components/Sections/FormSection'

function App() {
  const TIMER_PATH = '/assignment12368'
  const FORM_PATH = '/assignment567'

  const navLinks: navbarPage = [
    { title: 'Timer', path: TIMER_PATH },
    { title: 'Form', path: FORM_PATH },
  ]

  return (
    <>
      <Navbar pages={navLinks} />
      <Routes>
        <Route path={TIMER_PATH} element={<TimeSection />} />
        <Route path={FORM_PATH} element={<FormSection />} />
        <Route path="*" element={<TimeSection />} />
      </Routes>
    </>
  )
}

export default App
