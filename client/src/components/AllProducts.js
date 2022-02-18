import React,{useEffect} from "react";
import axios from 'axios';
import {Link} from '@reach/router';

const AllProducts = (props) => {
    const {products, setProducts} = props;

    useEffect(()=> {
        axios.get("http://localhost:8000/api/products")
            .then((res)=>{
                // console.log("This is the res.data from AllProducts",res.data);
                setProducts(res.data);
            })
            .catch((err)=>{
                console.log("Error from AllProductsd", err)
            })
    },[]);

    const removeFromDom = productId => {
        setProducts(products.filter(prod => prod._id !== productId)); //We could also write this in our PersonList component
    }


    const deleteProduct = (id) => {
        console.log(id);
        axios.post(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                console.log(res.data);
                removeFromDom(id)
            })
            .catch(err=>console.log(err));
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
                            <button onClick={(e)=>{deleteProduct(product._id)}}
                                    className={"bg-red-500 hover:bg-red-700 text-white font-bold py-1 rounded ml-8 mr-8"}
                            >Delete
                            </button>
                    </div>

                )
            })}
        </div>
    )
}

export default AllProducts;
