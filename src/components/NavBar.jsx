import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid">
           <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Tienda Eyewear</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#">Outlet</a>
                            <a className="nav-link" href="#">Sun</a>
                            <a className="nav-link" href="#">Optical</a>
                            <a className="nav-link" href="#">Kids</a>
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