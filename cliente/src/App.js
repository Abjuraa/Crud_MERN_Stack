import logo from './logo.svg';
import './App.css';
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuarios from './AgregarUsuarios';
import EditarUsuarios from './EditarUsuarios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <h2>Crud Mern Stack</h2>

     <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListaUsuarios/>} exact></Route>
        <Route path='/agregarusuario' element={<AgregarUsuarios/>} exact></Route>
        <Route path='/editarusuario' element={<EditarUsuarios/>} exact></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
