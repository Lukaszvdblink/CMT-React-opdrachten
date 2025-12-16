import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navigation from './pages/Navigation';



function App() {

  return (
    <BrowserRouter> 
    <Routes>
      <Route path='/' element={<Navigation/>} > 
        <Route path='/about' element={<About/>} />
        <Route index element={<Home />} />
        <Route path='*' element={<NoPage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
      </Route>
    </Routes>


    

    </BrowserRouter>
      


    
  )
}

export default App
