import React from 'react';
import { Link } from 'gatsby'
import '../styles/footer.scss'

export default function Footer() {
  return (
    <footer className='footer'>

      <div className="top">

        <img className='footer__mainLogo' alt="" />
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
            <li>
              <Link to='/contact'>About Us</Link>
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
        </nav>

        <div className="footer__socialMedia">
          {/* <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />
          <img src={Twitter} alt="" />
          <img src={Facebook} alt="" /> */}
        </div>
      </div>

      <div className="copyright">
        © Develop by IsaJs - Mican - JuanCJC All Rights Reserved
      </div>
    </footer>
  );
};
