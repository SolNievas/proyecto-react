import "./App.css";
import NavBar from "./components/NavBar";
import Error404 from "./components/Error404";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Carousel from "./components/Carousel";
import Info from "./components/Info";
import Footer from "./components/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartContextProvider from "./components/context/CartContext";
import Checkout from "./components/Checkout";
import Gracias from "./components/Gracias";


function App() {
  return (
    <div>
      <CartContextProvider>
      <BrowserRouter>
      <NavBar />
      <Carousel />
      <Info />
      <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/"} element={<App />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path='/gracias/:orderId' element= {<Gracias />}/>
          <Route path={"/*"} element={<Error404 />} />
      </Routes>
      <Footer />
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
