import { Route, Routes } from 'react-router-dom'
import RootLayout from './components/layout/RootLayout'
import Home from './page/home'
import About from './page/about'
import Contact from './page/contact'

import ERPSoftware from './page/solution/ERP_software'


function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
         <Route path="/solution/erp-software" element={<ERPSoftware />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      
      </Route>
       
        
    </Routes>
  )
}

export default App
