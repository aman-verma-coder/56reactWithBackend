// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {Routes, Route, NavLink} from 'react-router-dom';
// import {Link} from 'react-router-dom';
import './App.css';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Labs from './components/Labs.jsx';
import Support from './components/Support.jsx';
import MainHeader from './components/MainHeader.jsx';

function App () {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route index path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
