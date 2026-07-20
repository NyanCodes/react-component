import { HashRouter, Routes, Route, Navigate, NavLink } from "react-router-dom";

import Page from './components/Page';

// Previous example routing, kept for reference:
// import Home from './Home';
// import Register from './Register';
// import About from './About';
//
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/register" element={<Register/>}/>
//         <Route path="*" element={<h1>404 — Not Found</h1>}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }

function App() {
  return (
    <HashRouter>
      <div className="layout">
        <nav className="nav">
          <NavLink to="/greetings">Greetings</NavLink>
          <NavLink to="/profiles">Profiles</NavLink>
          <NavLink to="/hobbies">My Hobbies</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/greetings" replace />} />
          <Route path="/greetings" element={<Page />} />
          <Route path="/profiles" element={<Page />} />
          <Route path="/hobbies" element={<Page />} />
          <Route path="*" element={<h1>404 — Not Found</h1>} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
