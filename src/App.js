import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/bicycle' element={<ShopCategory category="bicycle" />} />
                    <Route path='/mattresses' element={<ShopCategory category="mattresses" />} />
                    <Route path='/electronics' element={<ShopCategory category="electronics" />} />
                    <Route path='/product' element={<Product />}>
                        <Route path=':productId' element={<Product />} />
                    </Route>
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/login' element={<LoginSignup />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
