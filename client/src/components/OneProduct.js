import React,{useEffect, useState} from "react";
import axios from 'axios';
import {Link} from "@reach/router";

const OneProduct = (props) => {
    const [product, setProduct] = useState({});
    const {id} = props;

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res)=>{
                console.log(`This is the res.data ${res.data}`);
                setProduct((res.data));
            })
            .catch((err)=>{
                console.log(err);
            })
    }, [id]);

    return (
        <div>
            <h2>OneProduct component</h2>
            <h3>Title: {product.title}</h3>
            <h4>Price: {product.price}</h4>
            <h4>Description: {product.description}</h4>
            <h5>
                <Link to={"/"}>Home</Link>
            </h5>
        </div>
    )
};

export default OneProduct;
