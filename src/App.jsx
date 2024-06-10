// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom';
import './App.css';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Labs from './components/Labs.jsx';
import Support from './components/Support.jsx';

function App () {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
