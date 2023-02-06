import logo from '../src/assets/logo.ico';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>

      <NavBar />
      <ItemListContainer greeting="JavierH" />
    </>

  );



}

export default App;
