import React from 'react';
import Button from './Button';

export default function ButtonTest() {
  return (
    <div>
      <h1>Buttons</h1>
      <p>Large, Default & Small</p>
      <Button size="large" />
      <Button size="medium" />
      <Button size="small" />
      <Button icon="true" />
      <Button disabled={true} />
      <Button disabled={false} />
      <Button loading={true} />
      <Button loading={false} />
      <Button />
    </div>
  );
}
