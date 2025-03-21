import { useState, useEffect } from 'react';
import Home from './features/Home/Home';
import Loader from './components/Loader';
import './styles/App.css';
import Navbar from './components/Navbar';

function App() {
  const [loading, setLoading] = useState(true);
  const [enterButtonClicked, setEnterbuttonClicked] = useState(false);  

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  // useEffect(() => {
  //   setLoading(true);

  //   setTimeout(() => {
  //     setLoading(false);
  //   }
  //   , 3000);
  // }, []);

  return (
    <>
      <Navbar />
      {!enterButtonClicked ? <Loader  
              loading={loading} 
             setEnterButtonClicked={setEnterbuttonClicked}/> : <Home />}
    </>
  );
}

export default App;
