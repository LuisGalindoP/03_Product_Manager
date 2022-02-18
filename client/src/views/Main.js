import React, {useState, useEffect} from "react";
import Link from "@reach/router";
import AllProducts from "../components/AllProducts";
import NewProduct from "../components/NewProduct";


const Main = (props) => {
    const [products, setProducts] = useState([]);

    return  (
        <div>
            <NewProduct
                products = {products}
                setProducts = {setProducts}
            />
            <AllProducts
                products = {products}
                setProducts = {setProducts}
            />
        </div>
    )
}

export default Main;
