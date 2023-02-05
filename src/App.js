import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Saludo from './components/ItemListContainer';


function App() {
  return (
    <>
      <NavBar />
      <Saludo usuario="JavierH" />
    </>

  );



}

export default App;
