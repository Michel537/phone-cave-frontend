import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarPage from './components/NavbarPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PhoneList from './components/PhoneList';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [phones, setPhones] = useState([]);


  const getPhoneList = () => {

    axios.get("http://localhost:5005/api/phones")
    .then( phonesFromDb => {
      console.log("here the phones "+ phonesFromDb.data)
      setPhones(phonesFromDb.data)
    })
    .catch((err) =>
        console.log("Problem getting the phones from database" + err)
      );

  }





  return (
    <div className="App">
     <NavbarPage />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phones" element={<PhoneList />} />



      </Routes>

    </BrowserRouter>

      
    
    </div>
  );
}

export default App;
