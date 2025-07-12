import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

/*
🧠 Theory (Hindi में):
Ye component ek school result checker hai:
User roll number type karta hai → naam, class, subjects + marks + assignments dikhte hain

🎯 Features:
- useEffect se data load
- Live search by roll
- Toast success/error
- Assignment info (fixed 3 assignments per subject)
- Total marks out of 300
*/

const dummyData = [
  {
    id: 1,
    roll: 'MIT9856262103',
    name: 'Kushal Kamble',
    class: '10th',
    subjects: [
      { name: 'Math', marks: 85, assignmentsDone: 2 },
      { name: 'Science', marks: 78, assignmentsDone: 3 },
      { name: 'English', marks: 92, assignmentsDone: 1 }
    ]
  },
  {
    id: 2,
    roll: 'MIT7643501205',
    name: 'Raj Marathe',
    class: '12th',
    subjects: [
      { name: 'Math', marks: 72, assignmentsDone: 3 },
      { name: 'Physics', marks: 65, assignmentsDone: 2 },
      { name: 'Chemistry', marks: 69, assignmentsDone: 3 }
    ]
  },
  {
    id: 3,
    roll: 'MIT9857656122',
    name: 'Shravani Suryavanshi',
    class: '11th',
    subjects: [
      { name: 'Biology', marks: 88, assignmentsDone: 2 },
      { name: 'Math', marks: 90, assignmentsDone: 2 },
      { name: 'English', marks: 84, assignmentsDone: 3 }
    ]
  }
];

function FetchStudentMarks() {
  const [students, setStudents] = useState([]);
  const [roll, setRoll] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toastShown, setToastShown] = useState(false); // ✅ one-time load toast

  // ⏬ Page load → data fetch
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

  // ⏳ Roll number input → auto search
  useEffect(() => {
    if (roll.trim() === '') {
      setSelectedStudent(null);
      return;
    }

    const found = students.find(
      (stu) => stu.roll.toLowerCase() === roll.toLowerCase()
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
      <h4>📘 Student Result Checker</h4>

      {/* 🔎 Roll Input */}
      <div className="input-group my-3">
        <input
          type="text"
          placeholder="Enter Roll Number"
          className="form-control"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
        />
      </div>

      {/* ⏳ Loading Spinner */}
      {loading && <p>⏳ Loading student data...</p>}

      {/* ❌ Not Found */}
      {!loading && roll.trim() !== '' && !selectedStudent && (
        <p className="text-danger">❌ No student found with roll number: {roll}</p>
      )}

      {/* ✅ Student Result */}
      {selectedStudent && (
        <div className="card shadow mt-3">
          <div className="card-body">
            <h5 className="card-title">👤 {selectedStudent.name}</h5>
            <p className="card-text">🎓 Class: {selectedStudent.class}</p>
            <p className="card-text">🪪 Roll No: {selectedStudent.roll}</p>

            <ul className="list-group">
              {selectedStudent.subjects.map((subj, idx) => (
                <li key={idx} className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <strong>{subj.name}</strong>
                    <span className="badge bg-success rounded-pill">
                      {subj.marks}/100
                    </span>
                  </div>
                  <small className="text-muted">
                    📘 Assignment Submitted: {subj.assignmentsDone} / 3
                  </small>
                </li>
              ))}
            </ul>

            {/* 📊 Total Marks */}
            <div className="mt-3">
              <strong>
                📊 Total: {
                  selectedStudent.subjects.reduce((acc, subj) => acc + subj.marks, 0)
                } / 300
              </strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FetchStudentMarks;
