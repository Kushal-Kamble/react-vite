import React, { useState } from 'react';
import ShowStudents from './ShowStudents';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import { ToastContainer } from 'react-toastify';

/*
🧾 index.jsx
Sabhi components ko combine karta hai (Add, Edit, Show)
*/

function AxiosStudentCRUD() {
  const [reload, setReload] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleReload = () => {
    setReload(!reload);
  };

  const handleEdit = (student) => {
    setEditMode(true);
    setSelectedStudent(student);
  };

  const handleCancel = () => {
    setEditMode(false);
    setSelectedStudent(null);
  };

  const handleUpdated = () => {
    handleCancel();
    handleReload();
  };

  return (
    <div className="container mt-4">
      <h4>📚 Axios CRUD – Students</h4>
      <ToastContainer />
      {editMode ? (
        <EditStudent
          selected={selectedStudent}
          onUpdated={handleUpdated}
          onCancel={handleCancel}
        />
      ) : (
        <AddStudent onAdded={handleReload} />
      )}

      <ShowStudents key={reload} onEdit={handleEdit} />
    </div>
  );
}

export default AxiosStudentCRUD;


/*

अब पूरा Axios CRUD system बन चुका है:

GET (All students) ✅

POST (New student) ✅

PUT (Update student) ✅

DELETE (Remove student) ✅


*/
