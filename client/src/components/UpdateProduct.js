import React,{useEffect, useState} from "react";
import {Link, navigate} from "@reach/router";
import axios from 'axios';
import {logDOM} from "@testing-library/react";

const UpdateProduct = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const {products, setProducts} = props;
    const {id} = props;

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res)=>{
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch((err)=>{
                console.log(err)})
    },[]);

    const handleUpdateForm = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`,{
            title: title,
            price: price,
            description: description
        })
            .then(res => {
                console.log(res);
                navigate("/");
            });
    }


    return (
        <div className={"container mx-auto mt-5"}>
            <h2 className={"font-bold text-xl mb-3"}>Update Product</h2>
            <form onSubmit={handleUpdateForm}>
                <div>
                    <label className={"block text-gray-600 text-sm font-bold"}>TITLE</label>
                    <input
                        className={" bg-gray-200 text-gray-700 border slate-100 text-m rounded py-1 w-1/3"}
                        type="text"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label className={"block text-gray-600 text-sm font-bold mt-3"}>PRICE</label>
                    <input
                        className={" bg-gray-200 text-gray-700 border slate-100 text-m rounded py-1 w-1/3"}
                        type="number"
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <label className={"block text-gray-600 text-sm font-bold mt-3"}>DESCRIPTION</label>
                    <textarea rows={"5"} cols={"20"}
                              className={" bg-gray-200 text-gray-700 border slate-100 text-m rounded py-1 w-1/3"}
                              value={description}
                              onChange={(e)=>setDescription(e.target.value)}
                    />
                </div>
                <button type={"submit"} className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-8"}>Submit</button>
            </form>
            <div className={"mt-5"}>
                <Link to={"/"} className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-8"}>Home</Link>
            </div>
        </div>
    )
}

export default UpdateProduct;
