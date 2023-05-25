import "./App.css";
import NavBar from "./components/NavBar";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from "./components/ItemListContainer";
import Carousel from "./components/Carousel";
import Info from "./components/Info";
import Footer from "./components/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Carousel />
      <Info />
      <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
