import React from 'react';
import FetchStudents from './01-FetchStudents';

/*
🧠 Purpose of this index.jsx:

- Yeh file ek centralized entry point hai iss folder ke liye.
- Agar tum multiple components banao (e.g., SearchStudents.jsx, AddStudentForm.jsx),
  to sabko yahi file se access kar sakte ho.
- App.jsx ya main file me sirf isko import karna hota hai.

Example:
import RealAPIIndex from './react-learning/10-api-real-json';

*/

function RealAPIIndex() {
  return (
    <div className="container">
      <h3 className="my-4">📄 Real API Integration – Students List</h3>
      <FetchStudents />
    </div>
  );
}

export default RealAPIIndex;
