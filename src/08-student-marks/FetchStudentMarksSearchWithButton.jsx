import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

/*
🧠 Theory (Hindi में):
Is component me hum ek fake API se students ka data fetch karenge,
fir naam ke through student ko search karke uske subject aur marks dikhayenge.

🎯 Real-life:
Socho tum ek school management app bana rahe ho — jaha parents apne
child ka naam type karke uska result dekh sakte hain.

✅ Features:
- useEffect se data load
- Search bar for name
- Toast alerts
- Bootstrap cards with subject + marks
*/

const dummyData = [
  {
    id: 1,
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
  const [students, setStudents] = useState([]);      // sab students ka data
  const [searchTerm, setSearchTerm] = useState('');  // naam search karne ke liye
  const [selectedStudent, setSelectedStudent] = useState(null); // mil gaya student
  const [loading, setLoading] = useState(true);      // loading indicator

  // ✅ Component mount hote hi data load karo
  useEffect(() => {
    setTimeout(() => {
      setStudents(dummyData);         // data set
      setLoading(false);              // loading false
      toast.success('Student data loaded!');
    }, 1000); // simulate API delay
  }, []);

  // 🔍 naam se search karna
  const handleSearch = () => {
    const found = students.find((stu) =>
      stu.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (found) {
      setSelectedStudent(found);
      toast.success(`🎯 ${found.name} found!`);
    } else {
      setSelectedStudent(null);
      toast.error('❌ Student not found!');
    }
  };

  return (
    <div className="container mt-4">
      <h4>📘 Student Result Finder</h4>

      {/* 🔎 Search Bar */}
      <div className="input-group my-3">
        <input
          type="text"
          placeholder="Enter student name"
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* ⏳ Loading message */}
      {loading && <p>⏳ Loading student data...</p>}

      {/* ✅ Result Card */}
      {selectedStudent && (
        <div className="card shadow mt-3">
          <div className="card-body">
            <h5 className="card-title">👤 {selectedStudent.name}</h5>
            <p className="card-text">📚 Class: {selectedStudent.class}</p>

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
