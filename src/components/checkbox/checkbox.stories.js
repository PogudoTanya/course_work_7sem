import React, { useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Checkbox } from './checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
  decorators: [withKnobs, withA11y],
};

export function WithText() {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  return (
    <>
      <Checkbox disabled={boolean('Disabled (disabled)', false)} checked={checked} onChange={setChecked} id="1">
        I have read and accepted the Terms of Service and Privacy Policy
      </Checkbox>
      <Checkbox disabled={boolean('Disabled (disabled)', false)} checked={checked2} onChange={setChecked2} id="2">
        Auth-aas may keep me informed  via email about products & services
      </Checkbox>
    </>
  );
}

export function DisabledWithText() {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox disabled={boolean('Disabled (disabled)', true)} checked={checked} onChange={setChecked} id="2">Checkbox</Checkbox>
  );
}

export function WithoutText() {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox checked={checked} onChange={setChecked} id="321" />
  );
}
