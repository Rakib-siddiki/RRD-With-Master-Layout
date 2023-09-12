
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/home';
import Contact from './components/Contact';
import About from './components/About';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/> ,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;