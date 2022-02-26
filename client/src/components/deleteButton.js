import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
    const {productId, successCallBack} = props;

    //DELETE PRODUCT
    const deleteProduct = () => {
        axios.post(`http://localhost:8000/api/products/${productId}`)
            .then(res=>{
                console.log(res.data);
                successCallBack();
            })
            .catch(err=>console.log(err));
    }

    return (
        <div>
            <button onClick={deleteProduct}
                    className={"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-8 mr-8"}
            >Delete
            </button>
        </div>
    )
};

export default DeleteButton;