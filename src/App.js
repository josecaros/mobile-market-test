import LayoutMenu from './layouts/LayoutMenu';
import './styles/index.css'
import './styles/fonts.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css';  //theme
import 'primereact/resources/primereact.min.css';                  //core css
import 'primeicons/primeicons.css';                                //icons
import ProductListPage from './pages/ProductListPage';
import { Routes, Route } from 'react-router-dom';
import ProductDetailPage from './pages/ProductDetailPage';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 3600000, //Tiempo de revalidación de datos
      cacheTime: 3600000
    }
  }
});

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <LayoutMenu>
          <Routes>
            <Route path='/' element={<ProductListPage />} />
            <Route path='/detalle/:idProduct' element={<ProductDetailPage />} />
          </Routes>
        </LayoutMenu>
      </QueryClientProvider>
    </div>
  );
}

export default App;
