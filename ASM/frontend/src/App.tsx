// import { Toaster } from 'react-hot-toast'
import { Route, Routes } from "react-router-dom";
import Client from "./layout/Client";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Admin from "./layout/Admin";
import HomeAdmin from "./pages/HomeAdmin";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import ListCategory from "./components/Admin/ListCategory";
import ListProduct from "./components/Admin/ListProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddCategory from "./pages/AddCategory";
import EditCategory from "./pages/EditCategory";
import Category from "./pages/Category";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Client}>
          <Route path="/" Component={Home} />
          <Route path="category/:id" Component={Category}/>
          <Route path="/detail/:id" Component={Detail} />
          <Route path="/register" Component={Register}/>
          <Route path="/login" Component={Login} />
        </Route>
        <Route path="/admin" Component={Admin}>
          <Route path="" Component={HomeAdmin}>
            <Route path="products" Component={ListProduct} />
            <Route path="add_product" Component={AddProduct} />
            <Route path="edit_product/:id" Component={EditProduct} />
            <Route path="categories" Component={ListCategory} />
            <Route path="add_category" Component={AddCategory} />
            <Route path="edit_category/:id" Component={EditCategory} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
