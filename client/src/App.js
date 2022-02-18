import {Router} from "@reach/router";

import AllProducts from "./components/AllProducts";
import OneProduct from "./components/OneProduct";
import NewProduct from "./components/NewProduct";
import Main from "./views/Main";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <div >
      <Router>
        <Main path={"/"}/>
        <OneProduct path={"/products/:id"}/>
        <UpdateProduct path={"/products/edit/:id"}/>
      </Router>

    </div>
  );
}

export default App;
