import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

/*
🧠 Theory (Hindi में):
Ye component ek fake student database se data load karta hai,
aur user jab roll number input karta hai, to uska result turant dikhata hai.

🎯 Real-life: School result checker
Parent roll number type karta hai → student ka naam, class, subject-marks dikhta hai.

Features:
✅ useEffect for data loading
✅ Search by roll number (without button)
✅ Toastify success/error
✅ Bootstrap styled cards
*/

// 🎓 Dummy Student Data
const dummyData = [
  {
    id: 1,
    roll: 'MIT9856262103',
    name: 'Kushal Kamble',
    class: '10th',
    subjects: [
      { name: 'Math', marks: 85 },
      { name: 'Science', marks: 78 },
      { name: 'English', marks: 92 }
    ]
  },
  {
    id: 2,
    roll: 'MIT7643501205',
    name: 'Raj Marathe',
    class: '12th',
    subjects: [
      { name: 'Math', marks: 72 },
      { name: 'Physics', marks: 65 },
      { name: 'Chemistry', marks: 69 }
    ]
  },
  {
    id: 3,
    roll: 'MIT9857656122',
    name: 'Shravani Suryavanshi',
    class: '11th',
    subjects: [
      { name: 'Biology', marks: 88 },
      { name: 'Math', marks: 90 },
      { name: 'English', marks: 84 }
    ]
  }
];

function FetchStudentMarks() {
  const [students, setStudents] = useState([]);
  const [roll, setRoll] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toastShown, setToastShown] = useState(false); // ✅ one-time toast

  // ✅ Load data only once
  useEffect(() => {
    setTimeout(() => {
      setStudents(dummyData);
      setLoading(false);

      if (!toastShown) {
        toast.success('✅ Student data loaded!');
        setToastShown(true);
      }
    }, 1000);
  }, [toastShown]);

  // 🔁 Watch roll input — jese hi change ho turant result update
  useEffect(() => {
    if (roll.trim() === '') {
      setSelectedStudent(null);
      return;
    }

    const found = students.find((stu) =>
      stu.roll.toLowerCase() === roll.toLowerCase()
    );

    if (found) {
      setSelectedStudent(found);
      toast.success(`🎯 ${found.name} found!`);
    } else {
      setSelectedStudent(null);
    }
  }, [roll, students]);

  return (
    <div className="container mt-4">
      <h4>📘 Student Result Search</h4>

      {/* 🔎 Search Input */}
      <div className="input-group my-3">
        <input
          type="text"
          placeholder="Enter Roll Number (e.g. MIT9856262103)"
          className="form-control"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
        />
      </div>

      {/* ⏳ Loading */}
      {loading && <p>⏳ Loading student data...</p>}

      {/* ❌ Not found message */}
      {!loading && roll.trim() !== '' && !selectedStudent && (
        <p className="text-danger">❌ No student found with roll number: {roll}</p>
      )}

      {/* ✅ Student Details */}
      {selectedStudent && (
        <div className="card shadow mt-3">
          <div className="card-body">
            <h5 className="card-title">👤 {selectedStudent.name}</h5>
            <p className="card-text">🎓 Class: {selectedStudent.class}</p>
            <p className="card-text">🪪 Roll No: {selectedStudent.roll}</p>

            <ul className="list-group">
              {selectedStudent.subjects.map((subj, idx) => (
                <li key={idx} className="list-group-item d-flex justify-content-between">
                  <span>{subj.name}</span>
                  <span className="badge bg-success rounded-pill">{subj.marks}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default FetchStudentMarks;
