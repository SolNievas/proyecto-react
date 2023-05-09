const itemListContainer = ({greeting}) => {
    return (
        <div className="container y-5">
            <div className="row">
                <div className="col text-center">
                    <div className="alert alert-danger" role="alert">{greeting}</div>
                </div>
            </div>  
        </div>
            
    )
}

export default itemListContainer;