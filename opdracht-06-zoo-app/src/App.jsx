import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage';
import DetailPage from './Pages/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals/:animalId" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;