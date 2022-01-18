import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { ItemList } from './components/ItemList/ItemList';


function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemList greetings="bienvenidos" />
    </div>
  );
}

export default App;
