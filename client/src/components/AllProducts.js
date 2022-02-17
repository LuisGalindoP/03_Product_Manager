import React,{useEffect, useState} from "react";
import axios from 'axios';
import {Link} from '@reach/router';

const AllProducts = (props) => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:8000/api/products")
            .then((res)=>{
                console.log(res.data);
                setAllProducts(res.data);
            })
            .catch((err)=>{
                console.log(err)
            })
    },[]);

    return (
        <div>
            <h2>AllProducts component</h2>
            <h3><Link to={"/products/new"}>Add a new product</Link></h3>
            {allProducts.map((product, index)=>{
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
