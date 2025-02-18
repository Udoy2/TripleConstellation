import { useState, useEffect } from 'react';
import Home from './features/Home/Home';
import Loader from './components/Loader';
import './styles/App.css';
import Navbar from './components/Navbar';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      <Navbar />
      {loading ? <Loader /> : <Home />}
    </>
  );
}

export default App;
