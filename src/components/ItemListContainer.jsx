import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
//import productos from "./json/productos.json";
import ItemList from "./ItemList";
import {getFirestore, collection, getDocs, where, query} from "firebase/firestore";
//import {addDoc} from "firebase/firestore"; 

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();


    /*useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        productos.forEach(producto => {
            addDoc(itemsCollection, producto);
        });
    }, []);*/
    
    useEffect(() => {
        const db = getFirestore();
        const productosCollection = collection(db, "items");
        const q = id ? query(productosCollection, where("categoria", "==", id)) : productosCollection;
        getDocs (q).then(resultado => {
            if (resultado.size>0){
            setItems(resultado.docs.map(item=>({id:item.id, ...item.data()})))
            } else{
                console.error("¡No hay productos en la colección!");
            }
        });

    },[id]);
        return (
                <div className="container my-5">
                    <div className="row">
                        <ItemList productos={items} />
                    </div>
                </div>
            )
        }
    
export default ItemListContainer;