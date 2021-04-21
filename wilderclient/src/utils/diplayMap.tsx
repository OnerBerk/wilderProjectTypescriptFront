import React from 'react';

export const DisplayMap = (data:any,
  Component: React.ElementType):React.ReactNode => (
  data.map((el: any, i: any) => <Component key={i} {...el} />));
