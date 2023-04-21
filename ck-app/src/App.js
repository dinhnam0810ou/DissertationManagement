
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap"
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Login from './components/Login';
import { backgroundImage } from './assets';
import Dissertation from './components/Dissertation';
function App() {
  return (
    <div className="App"   style={{backgroundImage: `url(${backgroundImage})` }}>
       <BrowserRouter> 
      <Header />
      <Container>
          <Routes path='/' >
            <Route index path='/login' element={<Login />} />
            <Route path='/' element={<Navigate to={"/login"}/>} />
            <Route  path='/dissertation' element={<Dissertation />} />
            {/* <Route path='/register' element={<Register />} /> */}
            {/* <Route path='*' element={<div className='alert alert-info m-1'>Comming soon...</div>} /> */}
          </Routes>
        </Container>
      </BrowserRouter> 
      <Footer/>
    </div>
  );
}

export default App;
