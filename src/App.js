import LayoutMenu from './layouts/LayoutMenu';
import './styles/index.css'
import './styles/fonts.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css';  //theme
import 'primereact/resources/primereact.min.css';                  //core css
import 'primeicons/primeicons.css';                                //icons
import ProductListPage from './pages/ProductListPage';
function App() {
  return (
    <div>
      <LayoutMenu>
        <ProductListPage />
      </LayoutMenu>
    </div>
  );
}

export default App;
