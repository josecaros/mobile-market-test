import LayoutMenu from './layouts/LayoutMenu';
import './styles/index.css'
import './styles/fonts.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css';  //theme
import 'primereact/resources/primereact.min.css';                  //core css
import 'primeicons/primeicons.css';                                //icons
import ProductListPage from './pages/ProductListPage';
import { Routes, Route } from 'react-router-dom';
import ProductDetailPage from './pages/ProductDetailPage';
function App() {
  return (
    <div>
      <LayoutMenu>
        <Routes>
          <Route path='/' element={<ProductListPage />} />
          <Route path='/detalle' element={<ProductDetailPage />} />
        </Routes>
      </LayoutMenu>
    </div>
  );
}

export default App;
