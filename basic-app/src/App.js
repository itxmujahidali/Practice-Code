import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
// import InputForm from './components/InputForm'
import ShowData from './components/ShowData'
import UpdateItem from './components/UpdateItem'


function App() {
  return (


    <BrowserRouter>
      <Routes>

        <Route exact path="/" element={[<Navbar />, <ShowData/>]} > </Route>
        <Route exact path="/update" element={<UpdateItem />}> </Route>

      </Routes>
    </BrowserRouter>


  );
}

export default App;
