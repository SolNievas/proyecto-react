const Info = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <p><img src={"img/info1.jpg"} alt="" className="img-fluid" /></p>
                    <h3>Polarized</h3>
                    <p><a href="/" className="btn btn-warning">Ver Más</a></p>
                </div>
                <div className="col-md-4">
                    <p><img src={"img/info2.jpg"} alt="" className="img-fluid" /></p>
                    <h3>Collabs</h3>
                    <p><a href="/" className="btn btn-warning">Ver Más</a></p>
                </div>
                <div className="col-md-4">
                    <p><img src={"img/info3.jpg"} alt="" className="img-fluid" /></p>
                    <h3>24/7</h3>
                    <p><a href="/" className="btn btn-warning">Ver Más</a></p>
                </div>
            </div>
        </div>
    )
}

export default Info;