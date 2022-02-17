import {Router} from "@reach/router";

import AllProducts from "./components/AllProducts";
import OneProduct from "./components/OneProduct";
import NewProduct from "./components/NewProduct";

function App() {
  return (
    <div >
      <Router>
        <AllProducts path={"/"}/>
        <NewProduct path={"/products/new"}/>
        <OneProduct path={"/products/:id"}/>
      </Router>

    </div>
  );
}

export default App;
