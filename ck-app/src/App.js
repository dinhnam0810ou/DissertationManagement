
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap"
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './layouts/Footer';
import Login from './components/Login';
import Register from './components/Register';
import { backgroundImage } from './assets';
import Dissertation from './components/Dissertation';
import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import Layout from './layouts/Layout';
import Statistics from './components/Statistics';
import Newdissertation from './components/Newdissertation';

// import './assets/js/main.js'

function App() {
  return (
    <div className="App"   >
      <BrowserRouter>

        <Container>

          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
    
          <Routes>
            <Route path='/' element={<Layout />} >
              {/* <Route path='/' element={<Navigate to={"/login"} />} /> */}
              <Route index path='/dissertation' element={<Dissertation />} />
              <Route index path='/statistics' element={<Statistics />} />
              <Route index path='/newdissertation' element={<Newdissertation />} />
            </Route>
          </Routes>



          {/* <Route path='*' element={<div className='alert alert-info m-1'>Comming soon...</div>} /> */}
        </Container>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
