import CartWidget from "./CartWidget";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="container-fluid">
           <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to={"#"}>TIENDA EYEWEAR</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" aria-current="page" to={"/"}>Home</NavLink>
                            <NavLink className="nav-link" to={"/category/outlet"}>Outlet</NavLink>
                            <NavLink className="nav-link" to={"/category/sun"}>Sun</NavLink>
                            <NavLink className="nav-link" to={"/category/optical"}>Optical</NavLink>
                        </div>
                        <div className=" col-8 text-end">
                            <CartWidget />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;