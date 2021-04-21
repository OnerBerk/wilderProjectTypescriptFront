import React from 'react';
import blankProfile from '../avatar.png';
import Skills, { SkillProps } from './skills';
import { DisplayMap } from '../utils/diplayMap';

import '../App.css';

export type WilderProps = {
    _id:number;
    name: string;
    city: string;
    skills: SkillProps[];
}

const Wilder = ({ name, city, skills }: WilderProps) => (
  <article className="card">
    <img src={blankProfile} alt="Jane Doe Profile" />
    <h3>
      {name}
      {' '}
      from
      {' '}
      {city}
    </h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>
    <h4>Wild Skills</h4>
    <ul className="skills">
      {DisplayMap(skills, Skills)}
    </ul>
  </article>
);

export default Wilder;
