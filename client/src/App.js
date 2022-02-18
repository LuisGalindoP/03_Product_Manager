import {Router} from "@reach/router";

import AllProducts from "./components/AllProducts";
import OneProduct from "./components/OneProduct";
import NewProduct from "./components/NewProduct";
import Main from "./views/Main";

function App() {
  return (
    <div >
      <Router>
        <Main path={"/"}/>
        <OneProduct path={"/products/:id"}/>
      </Router>

    </div>
  );
}

export default App;
