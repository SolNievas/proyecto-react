import bag from "./img/bag.svg";
import {CartContext} from "./context/CartContext";
import {useContext} from "react";
import {Link} from "react-router-dom";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);


    if (cartTotal () > 0) {
        return (
            <div>
                <Link to={"/cart"}>
                    <button type="button" className="btn btn-warning position-relative">
                        <img src={bag} alt="Carrito" width={24} />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {cartTotal()}
                        </span>
                    </button>
                </Link>
            </div>
        )
    }
}

export default CartWidget;