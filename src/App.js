
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home'
import { Products } from './components/Products';
import {Routes,Route } from 'react-router-dom'
import { ProductPage } from './components/ProductPage';

function App() {
  return (
    <>
    <Navbar />
    
    <Routes>
    <Route exact path = "/" element={<Home />}/>
      <Route exact path = "/products" element={<Products category="" />}/>
      <Route exact path="/products/men'sclothing" element={<Products category="category/men's clothing" />} key="clothmen"/>
      <Route exact path="/products/:id" element={<ProductPage />} key="clothmen"/>
      
      <Route exact path="/products/women'sclothing" element={<Products category="category/women's clothing"  key="clothwmen" />}/>  
      
      <Route exact path="/products/jewelery" element={<Products category="category/jewelery" />}  key="jew"/> 
     
      <Route exact path="/products/electronics" element={<Products category="category/electronics"   key="electronics"/>}/>
    
    
     
    
    </Routes>
    </>
  );
}

export default App;
