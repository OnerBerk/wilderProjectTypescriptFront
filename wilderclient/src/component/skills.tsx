import React from 'react';
import '../App.css';
import { Badge } from '../styles/skill/skill';

export type SkillProps={
    title:string
    votes:number
}

const Skills = ({ title, votes }:SkillProps) => (
  <li>
    {title}
    <Badge votes={votes}>{votes}</Badge>
  </li>
);

export default Skills;
