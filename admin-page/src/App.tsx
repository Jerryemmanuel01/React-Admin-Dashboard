import Home from "./pages/home/Home";
import './styles/global.scss'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {

const Layout = () =>{
  return(
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">  
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
          
        </div>
      </div>
      <Footer />
    </div>
  )
}


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "Login",
      element: <Login/>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
