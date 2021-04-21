import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import '../App.css';

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger" aria-label="hamburger-Menu">
      <Hamburger
        rounded
        duration={0.8}
        toggled={open}
        toggle={setOpen}
        color="snow"
        aria-label="hamburger-Menu"
      />
      {open
            && (
            <div>
              <ul className="ham">
                <li><a href="/#"> Home </a></li>
                <li><a href="/#"> About </a></li>
                <li><a href="/#"> Contact </a></li>
              </ul>
            </div>
            )}
    </div>
  );
};
export default HamburgerMenu;
