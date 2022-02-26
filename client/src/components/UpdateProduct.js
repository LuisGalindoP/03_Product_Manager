import React,{useEffect, useState} from "react";
import {Link, navigate} from "@reach/router";
import axios from 'axios';
//IMPORTING THE FORM 'NewProduct'
import NewProduct from './NewProduct';

const UpdateProduct = (props) => {
    const {id} = props;
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res)=>{
                setProduct(res.data);
                setLoaded(true);
            })
            .catch((err)=>{
                console.log(err)})
    },[]);

    const updateProduct = product => {
        axios.put(`http://localhost:8000/api/products/${id}`, product)
            .then(response => console.log(response));
        navigate('/')
    }

    return (
        <div className={"ml-5"}>
            <h2 className="text-xl font-bold mb-3">Update product</h2>
            {loaded &&
            <NewProduct
                onSubmitProp = {updateProduct}
            />}
            <Link to={"/"} className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded px-3"}>Home</Link>
        </div>
    )
}

export default UpdateProduct;
