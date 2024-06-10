// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom';
import './App.css';

function App () {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/support" element={<div>Support Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/labs" element={<div>Labs Page</div>} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
