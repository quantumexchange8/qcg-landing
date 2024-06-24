// import logo from './logo.svg';
import './App.css';
import Topbar from './Pages/Topbar';
import Footer from './Pages/Footer';
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Account from "./Pages/Account";
import Partner from "./Pages/Partner";
import Privacy from "./Pages/Privacy";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ScrollToTop from './Pages/ScrollToTop';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="account" element={<Account />} />
            <Route path="partner" element={<Partner />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
