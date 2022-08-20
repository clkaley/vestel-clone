import {
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Product from "./components/Product";
import SubCategory from "./components/SubCategory";


function App() {
  return (
  <>
    <Header/>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Category/>}/>
        <Route path="/category/:categoryID" element={<SubCategory/>}/>
        <Route path="/products/:productID" element={<Product/>}/>
        
      </Routes>
    <Footer/>
  </>
  );
}

export default App;
