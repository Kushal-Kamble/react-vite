import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';

function StudentDirectory() {
  // 🔹 States
  const [students, setStudents] = useState([]); // सभी student data
  const [searchTerm, setSearchTerm] = useState(''); // search input
  const [selectedStudent, setSelectedStudent] = useState(null); // Modal के लिए
  const [currentPage, setCurrentPage] = useState(1); // pagination
  const studentsPerPage = 3;

  // 🔁 API Call on component mount
  useEffect(() => {
    fetch('http://localhost:5000/students')
      .then((res) => {
        if (!res.ok) {
          throw new Error('API Failed');
        }
        return res.json();
      })
      .then((data) => {
        setStudents(data);
        toast.success('Student data loaded!');
      })
      .catch(() => {
        toast.error('🚫 Failed to load students');
      });
  }, []);

  // 🔍 Filter students based on search term
  const filteredStudents = students.filter((stu) =>
    stu.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🔢 Pagination logic
  const indexOfLast = currentPage * studentsPerPage;
  const indexOfFirst = indexOfLast - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">📚 Student Directory</h3>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* 🎨 Student Cards */}
      <div className="row">
        {currentStudents.map((stu) => (
          <div className="col-md-4 mb-4" key={stu.id}>
            <div
              className="card h-100 shadow-sm"
              onClick={() => setSelectedStudent(stu)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-body">
                <h5 className="card-title">👤 {stu.name}</h5>
                <p className="card-text">📧 {stu.email}</p>
                <p className="card-text">📞 {stu.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔢 Pagination Controls */}
      <nav className="mt-4">
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i}
              className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
            >
              <button className="page-link" onClick={() => handlePageChange(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* 📄 Student Detail Modal */}
      {selectedStudent && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">👤 {selectedStudent.name}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedStudent(null)}
                ></button>
              </div>
              <div className="modal-body">
                <p>📧 Email: {selectedStudent.email}</p>
                <p>📞 Phone: {selectedStudent.phone}</p>
                <p>🌐 Website: {selectedStudent.website}</p>
                <p>🏠 Address: {selectedStudent.address.street}, {selectedStudent.address.city}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentDirectory;
