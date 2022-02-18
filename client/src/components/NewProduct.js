import React,{useState} from "react";

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
        <div className={"container mx-auto mt-5"}>
            <h1 className={"font-bold text-xl mb-3"}>Add a new product</h1>

            <form onSubmit={formHandler}>
                <div>
                    <label className={"block text-gray-600 text-sm font-bold"}>TITLE</label>
                    <input
                        className={"indent-2 bg-gray-200 text-gray-700 border slate-100 text-m rounded py-1 w-1/3"}
                        type="text"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label className={"block text-gray-600 text-sm font-bold mt-3"}>PRICE</label>
                    <input
                        className={"indent-2 bg-gray-200 text-gray-700 border slate-100 text-m rounded py-1 w-1/3"}
                        type="number"
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <label className={"block text-gray-600 text-sm font-bold mt-3"}>DESCRIPTION</label>
                    <textarea rows={"5"} cols={"20"}
                              className={"indent-2 bg-gray-200 text-gray-700 border slate-100 text-m rounded py-1 w-1/3"}
                              value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                    />
                </div>
                <button type={"submit"} className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-2"}>Add product</button>
            </form>
            <h5>
                {/*<Link to={"/"}>Home</Link>*/}
            </h5>
        </div>
    )
}

export default NewProduct;
