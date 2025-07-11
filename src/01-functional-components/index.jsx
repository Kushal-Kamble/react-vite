import React from 'react';
import BasicFunctionalComponent from './01-BasicFunctionalComponent';
import MultipleComponents from './02-MultipleComponents';
import FirstComponents from './03-FirstComponents';

function FunctionalComponentsIndex() {
  return (
    <div>
      <h1>Functional Component Examples</h1>
      <BasicFunctionalComponent />
      <MultipleComponents />
        <FirstComponents />
    </div>
  );
}

export default FunctionalComponentsIndex;
