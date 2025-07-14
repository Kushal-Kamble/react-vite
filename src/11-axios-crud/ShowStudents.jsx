import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function ShowStudents({ onEdit }) {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const res = await axios.get('http://localhost:5000/students');
      setStudents(res.data);
    } catch (error) {
      toast.error('🚫 Failed to fetch students');
    }
  };

  const deleteStudent = async (id) => {
    if (!window.confirm('Are you sure you want to delete?')) return;

    try {
      await axios.delete(`http://localhost:5000/students/${id}`);
      toast.success('🗑️ Student deleted');
      fetchStudents();
    } catch (error) {
      toast.error('❌ Failed to delete student');
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="mt-3">
      <h5>🎓 Students List</h5>
      <div className="row">
        {students.map((stu) => (
          <div className="col-md-4 mb-3" key={stu.id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h6>{stu.name}</h6>
                <p>Email: {stu.email}</p>
                <p>📞 {stu.phone}</p>
                <p>🏙️ {stu.city}</p>
                <button
                  className="btn btn-sm btn-primary me-2"
                  onClick={() => onEdit(stu)}
                >
                  ✏️ Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteStudent(stu.id)}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowStudents;
