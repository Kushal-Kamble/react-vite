import React from 'react';
import FetchStudentMarks from './FetchStudentMarks';

function StudentMarksIndex() {
  return (
    <div className="container">
      <h3 className="my-4">📄 Day 8 – Student Result Search (API + Toastify)</h3>
      <FetchStudentMarks />
    </div>
  );
}

export default StudentMarksIndex;
