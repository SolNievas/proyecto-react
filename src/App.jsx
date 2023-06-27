import "./App.css";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Carousel from "./components/Carousel";
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
      <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/"} element={<App />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"/gracias/:orderId"} element= {<Gracias />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
