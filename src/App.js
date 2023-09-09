import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Projects from './components/projects/projects';
import Contacts from './components/contacts/contacts';
import img1 from './images/myselfobviously.png'; 
import Undefined from './components/undefined/undefined';
import MyNewCrush from './components/Divina/divina';

function App() {
  return (
    <>
    {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Home />} />
    </Routes> */}
    <div className="App">
      <>
      
      <Routes>
            <Route path='/' element={<Home image={img1} />}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            <Route path='/contacts' element={<Contacts />}></Route>
            <Route path='/divina' element={<MyNewCrush></MyNewCrush>}></Route>
            <Route path='*' element={<Undefined></Undefined>}></Route>
      </Routes>
      </>
    </div>
    </>
  );
}

export default App;
