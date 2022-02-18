import React,{useEffect, useState} from "react";
import {Link, navigate} from "@reach/router";
import axios from 'axios';

const NewProduct = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const {products, setProducts} = props;

    const formHandler = (e)=> {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", {
            title,
            price,
            description
        })
            .then((res)=> {
                // console.log("This is res data from newProduct", + res.data);
                setProducts([...products, res.data]);
                // navigate("/")
            })
            .catch((err)=>{
                console.log(err);
            })
        setTitle("");
        setPrice("");
        setDescription("");
    }


    return (
        <div>
            <h2>NewProduct component</h2>
            <h3>{products.length}</h3>
            <form onSubmit={formHandler}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea rows={"5"} cols={"20"}
                        onChange={(e)=>setDescription(e.target.value)}
                    />
                </div>
                <button type={"submit"}>Add product</button>
            </form>
            <h5>
                {/*<Link to={"/"}>Home</Link>*/}
            </h5>
        </div>
    )
}

export default NewProduct;
