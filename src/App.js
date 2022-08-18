import {
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Category from "./components/Category";


function App() {
  return (
  <>
    <Header/>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Category/>}/>
      </Routes>
    <Footer/>
  </>
  );
}

export default App;
