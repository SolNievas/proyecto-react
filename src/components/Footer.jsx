import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="container-fluid text-dark bg-warning py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <h6>Contacto</h6>    
                    </div>
                    <div className="col-md-2">
                        <h6>Sucursales</h6>    
                    </div>
                    <div className="col-md-2">
                        <h6>Como Comprar</h6>    
                    </div>
                    <div className="col-md-2">
                        <h6>Preguntas Frecuentes</h6>    
                    </div>
                    <div className="col-md-2">
                        <h6>Sobre Tienda Eyewear</h6>    
                    </div>
                    <div className="col-md-2">
                        <small>&copy; 2023 <b>Tienda Eyewear</b> - Todos los Derechos Reservados.</small> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;