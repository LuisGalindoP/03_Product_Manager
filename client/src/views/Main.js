import React, {useState, useEffect} from "react";
import {Link, navigate} from "@reach/router";
import AllProducts from "../components/AllProducts";
import NewProduct from "../components/NewProduct";
import axios from "axios";


const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    //GET ALL PRODUCTS TO SHOW IN LIST
    useEffect(()=> {
        axios.get("http://localhost:8000/api/products")
            .then((res)=>{
                // console.log("This is the res.data from AllProducts",res.data);
                setProducts(res.data);
                setLoaded(true);
            })
            .catch((err)=>{
                console.log("Error from AllProductsd", err)
            })
    },[loaded]);


    //ADD A NEW PRODUCT
    const createProduct = product => {
        axios.post("http://localhost:8000/api/products", product)
            .then((response) => {
                setProducts([...products, response.data]);
            })
            .catch((err)=>{
                console.log(err);
            })
    };


    return  (
        <div className={"ml-5"}>
            <h2 className="text-xl font-bold mb-3">Add products</h2>
            <NewProduct
                onSubmitProp = {createProduct}
                initialTitle = ''
                initialPrice = ''
                initialDescription = ''

            />

            <AllProducts
                products = {products}
                setProducts = {setProducts}
            />
        </div>
    )
}

export default Main;
