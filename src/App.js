import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import GlobalStyles from './styles/GlobalStyles';
import CryptoDetails from './components/Details/CryptoDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <div>
          <Navbar />
        </div>
        <section className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<CryptoDetails />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
