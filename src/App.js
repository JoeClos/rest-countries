import './App.css';
import FrontPage from './components/FrontPage';
// import SearchAppBar from './components/SearchAppBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryDetail from './components/CountryDetail';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
          <Route path="/country/:countryName" element={<CountryDetail />} />
      
      </Routes>
        </BrowserRouter>
    </div>
  
  );
}

export default App;
