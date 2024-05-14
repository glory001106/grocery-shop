import { RouterProvider } from 'react-router-dom';
import './App.css';
import ProductsProvider from './contexts/ProductsProvider';
import Favorites from './Pages/Favorites/Favorites';
import { router } from './Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <ProductsProvider>
        <RouterProvider router={router} />
        <Favorites />
        <Toaster/>
      </ProductsProvider>
    </div>
  );
}

export default App;
