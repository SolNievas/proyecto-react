import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="container-fluid">
      <NavBar />
      <ItemListContainer greeting={"El carrito esta vacio!"} />
    </div>
  );
}

export default App;
