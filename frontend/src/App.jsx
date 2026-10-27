import { Route, Routes } from 'react-router-dom'
import RootLayout from './components/layout/RootLayout'
import Home from './page/home'
import About from './page/about'
import Contact from './page/contact'
import CaseStudy from './page/case_study'
import ERPSoftware from './page/solution/ERP_software'
import Nuvio from './page/solution/nuvio'

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-study" element={<CaseStudy />} />
      
      </Route>
        <Route path="/solution/erp-software" element={<ERPSoftware />} />
        <Route path="/solution/nuvio" element={<Nuvio />} />
    </Routes>
  )
}

export default App
