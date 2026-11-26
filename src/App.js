import './App.css';
import { Route, Routes } from 'react-router-dom';
import Website1 from './Components/Website1';

function App() {
  return (
    <>
    <Routes>
      <Route path='/website1' element={<Website1/>}/>
    </Routes>
    </>
  );
}

export default App;
