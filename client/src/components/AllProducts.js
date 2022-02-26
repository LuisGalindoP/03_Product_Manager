import React,{useEffect} from "react";
import axios from 'axios';
import {Link} from '@reach/router';
import DeleteButton from "./deleteButton";

const AllProducts = (props) => {
    const {products, setProducts, loaded, setLoaded} = props;

    //DELETE PRODUCT
    const deleteProduct = (id) => {
        console.log(id);
        axios.post(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                console.log(res.data);
                removeFromDom(id)
            })
            .catch(err=>console.log(err));
    }

    //REMOVE PRODUCT FROM LIST AFTER DELETION
    const removeFromDom = productId => {
        setProducts(products.filter(prod => prod._id !== productId)); //We could also write this in our PersonList component
    }

    return (
        <div className={"container mx-auto mt-5"}>
            <hr/>
            <h1 className={"font-bold text-xl mb-3 mt-3"}>Products list</h1>

            {products.map((product, index)=>{
                return (
                    <div key={index} className={"grid grid-cols-3 gap-4 mt-2"}>
                            <Link to={`/products/${product._id}`}>
                                <h4 className={"bg-gray-100 py-1"}>{index+1} {product.title}</h4>
                            </Link>
                            <DeleteButton
                               productId={product._id}
                               successCallBack = {()=>removeFromDom(product._id)}
                            />
                    </div>

                )
            })}
        </div>
    )
}

export default AllProducts;
