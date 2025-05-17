import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandPage from './pages/LandPage';

function App() {
  return(
    <Router>
      <Routes>
        <Route index element={<LandPage />} />
      </Routes>
    </Router>
  )

}

export default App
