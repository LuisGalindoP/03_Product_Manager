import React,{useEffect, useState} from "react";
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

    return (
        <div>
            <h2>AllProducts component</h2>
            <h3>{products.length}</h3>
            {products.map((product, index)=>{
                return (
                    <div key={index}>
                        <Link to={`/products/${product._id}`}>
                            <h4>{product.title}</h4>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default AllProducts;
