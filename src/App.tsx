// css
import './App.css';
// third party imports
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
// components
import About from './routes/about/AboutPage';
import ProductPage from './routes/products/ProductPage';
import ContactPage from './routes/contact/ContactPage';
import AppRoot from './routes/app_root/AppRoot';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <AppRoot />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: '/products',
        element: <ProductPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
