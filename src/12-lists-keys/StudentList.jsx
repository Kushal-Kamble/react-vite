import React from 'react';

/*
🧠 Lists & Keys
- .map() se multiple elements render karna
- har item ke liye unique key dena (id ya index)
*/

const students = [
  { id: 1, name: 'Kushal Kamble', city: 'Pune' },
  { id: 2, name: 'Raj Marathe', city: 'Mumbai' },
  { id: 3, name: 'Shravani Suryavanshi', city: 'Nagpur' }
];

function StudentList() {
  return (
    <div className="container mt-4">
      <h4>📃 Student List</h4>
      <ul className="list-group">
        {students.map((stu) => (
          <li key={stu.id} className="list-group-item">
            {stu.name} ({stu.city})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
