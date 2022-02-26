import React,{useEffect, useState} from "react";
import axios from 'axios';
import {Link, navigate} from "@reach/router";
import DeleteButton from '../components/deleteButton'

const OneProduct = (props) => {
    const [product, setProduct] = useState({});
    const {id} = props;

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res)=>{
                // console.log(`This is the res.data ${res.data}`);
                setProduct((res.data));
            })
            .catch((err)=>{
                console.log(err);
            })
    }, [id]);

    return (
        <div className={"container mx-auto mt-5"}>
            <div className={ "bg-slate-200 rounded p-4"}>
                {/*<h2>OneProduct component</h2>*/}
                <div className={"font-bold"}>
                    <h3 className={"text-2xl"}>Title: {product.title}</h3>
                    <h4 className={"text-lg"}>Price: {product.price}</h4>
                    <h4 className={"text-lg"}>Description: {product.description}</h4>
                    <h2>Id: {id}</h2>
                </div>
            </div>
            <div className={"mt-5 flex gap-3"}>

                    <Link to={"/"} className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded px-3"}>Home</Link>
                    <Link to={`/products/edit/${id}`} className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded px-3"}>Edit</Link>

                <DeleteButton
                    productId = {id}
                    successCallBack = {()=>navigate('/')}
                />
            </div>
        </div>
    )
};

export default OneProduct;
