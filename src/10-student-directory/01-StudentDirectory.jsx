import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
📘 Student Directory App
Features:
- Fetch students from JSON Server
- Search by name
- Pagination
- Bootstrap card layout
- Edit student info (modal)
- Delete student
*/

// ✅ Backend API
const API_URL = 'http://localhost:5000/students';

function StudentDirectory() {
  const [students, setStudents] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 4;

  // 🔧 For Edit Modal
  const [editStudent, setEditStudent] = useState(null);

  // ✅ Fetch data on mount
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setFiltered(data);
        toast.success('✅ Students Loaded!');
      })
      .catch(() => toast.error('❌ Failed to load students'));
  }, []);

  // 🔍 Search Logic
  useEffect(() => {
    const results = students.filter((stu) =>
      stu.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltered(results);
    setCurrentPage(1);
  }, [searchTerm, students]);

  // 🧮 Pagination Logic
  const indexOfLast = currentPage * studentsPerPage;
  const indexOfFirst = indexOfLast - studentsPerPage;
  const currentStudents = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / studentsPerPage);

  // 🗑️ Delete Student
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure to delete this student?')) return;
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      toast.success('🗑️ Student Deleted!');
      setStudents((prev) => prev.filter((stu) => stu.id !== id));
    } catch (err) {
      toast.error('❌ Failed to delete student');
    }
  };

  // ✏️ Open Edit Modal
  const openEditModal = (student) => {
    setEditStudent(student);
  };

  // 💾 Save Edited Student
  const handleEditSave = async () => {
    const { id, name, email, phone, address } = editStudent;
    if (!name || !email) {
      toast.error('❌ Name and email required!');
      return;
    }
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, address }),
      });
      toast.success('✅ Student Updated!');
      setStudents((prev) =>
        prev.map((s) => (s.id === id ? editStudent : s))
      );
      setEditStudent(null);
    } catch {
      toast.error('❌ Failed to update student');
    }
  };

  return (
    <div className="container mt-4">
      <h4>📘 Student Directory</h4>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* 🧑‍🎓 Student Cards */}
      <div className="row">
        {currentStudents.map((stu) => (
          <div className="col-md-6 col-lg-4 mb-4" key={stu.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5>{stu.name}</h5>
                <p>📧 {stu.email}</p>
                <p>📞 {stu.phone}</p>
                <p>📍 {stu.address?.city}</p>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => openEditModal(stu)}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleDelete(stu.id)}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 📄 Pagination */}
      <nav>
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i}
              className={`page-item ${i + 1 === currentPage ? 'active' : ''}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              <button className="page-link">{i + 1}</button>
            </li>
          ))}
        </ul>
      </nav>

      {/* ✏️ Edit Modal */}
      {editStudent && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Student</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setEditStudent(null)}
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-2"
                  value={editStudent.name}
                  onChange={(e) =>
                    setEditStudent({ ...editStudent, name: e.target.value })
                  }
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="form-control mb-2"
                  value={editStudent.email}
                  onChange={(e) =>
                    setEditStudent({ ...editStudent, email: e.target.value })
                  }
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  value={editStudent.phone}
                  onChange={(e) =>
                    setEditStudent({ ...editStudent, phone: e.target.value })
                  }
                  placeholder="Phone"
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  value={editStudent.address?.city || ''}
                  onChange={(e) =>
                    setEditStudent({
                      ...editStudent,
                      address: {
                        ...editStudent.address,
                        city: e.target.value,
                      },
                    })
                  }
                  placeholder="City"
                />
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-success"
                  onClick={handleEditSave}
                >
                  💾 Save
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setEditStudent(null)}
                >
                  ❌ Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentDirectory;
