import * as React from 'react';
import HamburgerMenu from './hamburger';
import '../App.css';

type Props={
    title:string
}

const Header:React.FC<Props> = ({ title }:Props) => (
  <header>
    <h1>{title}</h1>
    <div className="nav">
      <p>Home</p>
      <p>contact</p>
      <p>About</p>
    </div>
    <HamburgerMenu />
  </header>
);
export default Header;
