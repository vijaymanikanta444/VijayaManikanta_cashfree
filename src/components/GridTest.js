import React from 'react';
import Grid from './Grid';

export default function GridTest() {
  const data = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
  ];
  return (
    <div>
      <Grid data={data} col={5} gap="5" />
      <Grid data={data} gap="5" size={200} />
      <Grid data={data} gap="5" />
      <Grid data={data} />
    </div>
  );
}
