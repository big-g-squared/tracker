import React from 'react';
import { useHistory } from 'react-router';
import { Link, withRouter } from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    return (
        <header class="sans-serif">
        <div class="cover bg-left bg-center-l" >
          <div class="bg-black-80 pb4">
            <nav class="dt w-100 mw8 center"> 
              <div class="dtc w2 v-mid pa3">
                <Link to="/" className="dib w2 h2 pa1 ba b--white-90 grow-large border-box">
                  <svg class="link white-90 hover-white" data-icon="skull" viewBox="0 0 32 32" style={{fill: "currentcolor"}}><title>skull icon</title><path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path></svg>
                </Link>
              </div>
              <div class="dtc v-mid tr pa3">
                <Link to="/" className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" > Classes </Link> 
                <Link to="/newClass" className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" > New Class </Link> 
                <a href="http://www.spoderman.dev" class="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" > About </a> 
                <a href="http://www.spoderman.dev/resume" class="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3"> Hire Me Plz </a> 
                <Link to="/newAcct" class="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" href="/" >Sign Up</Link> 
              </div>
            </nav>
          </div>
        </div> 
      </header>
    )
}

export default Header;