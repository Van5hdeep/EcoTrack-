import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FallingLeaves from './components/FallingLeaves';
import Home from './pages/Home';
import Drives from './pages/Drives';
import Dashboard from './pages/Dashboard';
import Stories from './pages/Stories';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white relative flex flex-col">
        <FallingLeaves />
        <Navbar />
        
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drives" element={<Drives />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/stories" element={<Stories />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
