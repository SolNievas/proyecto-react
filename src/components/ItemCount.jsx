import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const ItemCount = ({stock}) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const sumar = () => {
        if (items < itemStock) {
            setItems(items + 1);
        }
    }

    const restar = () => {
        if (items > 1) {
            setItems(items - 1);
        }
    }

    const onAdd = () => {
        if (items <= itemStock) {
            setItemStock(itemStock - items);
            setItems(1);
        }
    }

    useEffect (() => {
        setItemStock(stock);
    },
        [stock]);


    return (
        <div className="container">
            <div classNme="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-warning" onClick={restar}>-</button>
                        <button type="button" className="btn btn-warning">{items}</button>
                        <button type="button" className="btn btn-warning" onClick={sumar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-warning" onClick={onAdd}>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;