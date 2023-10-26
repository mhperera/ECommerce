import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from './redux/store';
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.scss";

import { PersistGate } from 'redux-persist/integration/react';

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/products/:id",
        element: <Products/>
      },
      {
        path: "/product/:id",
        element: <Product/>
      }
    ]
  }
]);

function App() {
  return <div>
            <Provider store={store}>
              <PersistGate loading={"loading"} persistor={persistor}>
                <RouterProvider router={router} />
              </PersistGate>
            </Provider>
          </div>;
}

export default App;
