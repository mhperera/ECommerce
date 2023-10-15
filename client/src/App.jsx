import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home Page</div>
  },
  {
    path: '/products/:id',
    element: <div>Category</div>
  },  
  {
    path: '/product/:id',
    element: <div>Product</div>
  }
]);

function App() {
  return <div><RouterProvider router={router} /></div>;
}

export default App;
