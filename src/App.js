import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Website from './Components/Website';
import Website2 from './Components/Website2';
import Website3 from './Components/Website3';
import Website4 from './Components/Website4';

function App() {
  return (
    <>
    <Routes>
      <Route path='/website' element={<Website/>}/>,
      <Route path='/website2' element={<Website2/>}/>,
      <Route path='/website3' element={<Website3/>}/>,
      <Route path='/website4' element={<Website4/>}/>
    </Routes>
    </>
  );
}

export default App;
