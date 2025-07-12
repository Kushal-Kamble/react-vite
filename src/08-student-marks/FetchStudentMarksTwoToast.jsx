import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

/*
🧠 Theory (Hindi में):
Is component me hum ek school ke student ka result fetch karte hain roll number ke through.
User jaise hi roll number type karega, agar data mil gaya to result card dikhega + toast aayega.

🎯 Real-life:
School portal jaha parent apne child ka roll number daalkar uska result dekhte hain.

✅ Features:
- useEffect: Data load
- Search by rollNumber (live search)
- Toast alerts
- Bootstrap card with subject & marks
- No search button – result auto show
*/

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
    roll: 'MIT9856262104',
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
    roll: 'MIT9856262105',
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
  const [students, setStudents] = useState([]);         // saara data
  const [rollNumber, setRollNumber] = useState('');     // search input
  const [selectedStudent, setSelectedStudent] = useState(null); // matched student
  const [loading, setLoading] = useState(true);         // loader state
  const [toastShown, setToastShown] = useState(false);  // avoid multiple toasts on load

  // ✅ Page load hone par data load karo (once)
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

  // 🔎 Jaise hi rollNumber change ho, auto search kare
  useEffect(() => {
    if (rollNumber.trim() === '') {
      setSelectedStudent(null);
      return;
    }

    const found = students.find((stu) =>
      stu.roll.toLowerCase() === rollNumber.toLowerCase()
    );

    if (found) {
      setSelectedStudent(found);
      toast.success(`🎯 Result found for: ${found.name}`);
    } else {
      setSelectedStudent(null);
    }
  }, [rollNumber, students]);

  return (
    <div className="container mt-4">
      <h4>🎓 Student Result Finder (Roll Number Based)</h4>

      {/* 🔍 Roll No Input */}
      <div className="input-group my-3">
        <input
          type="text"
          placeholder="Enter Roll Number"
          className="form-control"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
        />
      </div>

      {/* ⏳ Loader */}
      {loading && <p>⏳ Loading student data...</p>}

      {/* ✅ Result Card */}
      {selectedStudent && (
        <div className="card shadow mt-3">
          <div className="card-body">
            <h5 className="card-title">👤 {selectedStudent.name}</h5>
            <p className="card-text">📘 Class: {selectedStudent.class}</p>
            <p className="card-text">🆔 Roll: {selectedStudent.roll}</p>

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

      {/* ❌ Agar roll enter kiya aur match nahi hua */}
      {rollNumber.trim() !== '' && !selectedStudent && !loading && (
        <p className="text-danger">❌ No student found for roll: {rollNumber}</p>
      )}
    </div>
  );
}

export default FetchStudentMarks;
