import React from 'react';
import FocusInputRef from './01-FocusInputRef';
import UncontrolledFormRef from './02-UncontrolledFormRef';
import ResetFormWithRef from './03-ResetFormWithRef';

function UseRefIndex() {
  return (
    <div className="container">
      <h3 className="my-4">📍 Day 6 – useRef Examples</h3>
      <FocusInputRef />
      <UncontrolledFormRef />
      <ResetFormWithRef />
    </div>
  );
}

export default UseRefIndex;
