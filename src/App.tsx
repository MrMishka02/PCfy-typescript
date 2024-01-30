import { EntriesList, InfoPage, Landing, LaptopInfo, PersonalInfo } from 'pages'
import SuccessModal from 'pages/Modal/SuccessModal'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='personal-info' element={<PersonalInfo />} />
        <Route path='laptop-info' element={<LaptopInfo />} />
        <Route path='show-succesmodal' element={<SuccessModal />} />
        <Route path='entries-list' element={<EntriesList />} />
        <Route path='info-page' element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
