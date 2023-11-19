import {
  EntriesList,
  InfoPage,
  Landing,
  LaptopInfo,
  ModalPage,
  PersonalInfo,
} from 'pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='personal-info' element={<PersonalInfo />} />
        <Route path='laptop-info' element={<LaptopInfo />} />
        <Route path='show-modal' element={<ModalPage />} />
        <Route path='entries-list' element={<EntriesList />} />
        <Route path='info-page' element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
