import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
        <div className="header">
            
              <Link to='/categories/'>Categories Page</Link>
              <Link to='/myfriends/'>My Friends</Link>
              <Link to='/parties/my'>My Parties</Link>
              <Link to='/parties/actual'>Parties I`ll Go</Link>
              <Link to='/profile/'>User Profile</Link>
                          
        </div>
    );
  }
}

export default Header;