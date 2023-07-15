import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import Products from '@/pages/Books';
import AddBook from '@/pages/AddBook';
import Signup from '@/pages/Signup';
import ProductDetails from '@/pages/BookDetails';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/books',
        element: <Products />,
      },
      {
        path: '/book-details/:id',
        element: <ProductDetails />,
      },
      {
        path: '/add-book',
        element: <AddBook />,
      },
    ],
  },
  
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
