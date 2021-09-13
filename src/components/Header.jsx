import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className='top-header'>
      <div className='h-background'>
        <div className='leaves-background-title'>
          <div className='h-title'>
            <NavLink className='link-kokomo' to='/'>
              <h3>Kokomo</h3>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
