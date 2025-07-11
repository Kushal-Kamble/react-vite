import React from 'react';
import ControlledComponent from './01-ControlledComponent';
import PasswordToggle from './02-PasswordToggle';
import UncontrolledComponent from './03-UncontrolledComponent';

function ControlledIndex() {
  return (
    <div className="container">
      <h3 className="my-4">🔐 Day 5 – Controlled vs Uncontrolled Components</h3>
      <ControlledComponent />
      <PasswordToggle />
      <UncontrolledComponent />
    </div>
  );
}

export default ControlledIndex;
