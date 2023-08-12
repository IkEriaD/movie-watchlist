import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Watchlist from "./Watchlist";
import Watched from "./Watched";
import Add from "./Add";



function Header() {
  return (
    <Router>
    <header>
      <div className='container'>
        <div className='inner-content'>
          <div className='brand'>
            <Link as={Link} to={"/"}>Watchlist</Link>
          </div>

          <ul className='nav-links'>
            <li>
              <Link as={Link} to={"/"}>Watchlist</Link>
            </li>

            <li>
              <Link as={Link} to={"/watched"}>Watched</Link>
            </li>

            <li>
              <Link as={Link} to={"/add"} className='btn'>+ Add</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <div>
        <Routes>
            <Route path="/" element={<Watchlist/>}></Route>
            <Route path="/watched" element={<Watched/>}></Route>
            <Route path="/add" element={<Add/>}></Route>
        </Routes>
      </div>
      
    </Router>
  );
}

export default Header;







