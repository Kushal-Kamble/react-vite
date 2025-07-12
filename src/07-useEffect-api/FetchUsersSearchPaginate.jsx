import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

/*
🧠 Theory (Hindi में):

✅ useEffect: Component mount hote hi API call hota hai
✅ useState: Data, loading, error, searchText, pagination sab track karte hain
✅ Search: input ke through user list filter hoti hai
✅ Pagination: 5-5 users ek page pe show karte hain

🎯 UX Goal:
- Spinner jab tak data aaye
- Search bar se user filter
- Beautiful bootstrap cards
- 5 users per page pagination
*/

function FetchUsersSearchPaginate() {
  const [users, setUsers] = useState([]);       // All users
  const [loading, setLoading] = useState(true); // Loading spinner
  const [error, setError] = useState(null);     // Error
  const [searchText, setSearchText] = useState(''); // Search input
  const [currentPage, setCurrentPage] = useState(1); // Current pagination page

  const usersPerPage = 5; // 👈 Kitne users ek page me dikhane hain

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('API Failed');
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        toast.success('✅ Users loaded successfully!');
      })
      .catch((err) => {
        setError(err.message);
        toast.error('🚫 Failed to load users');
      })
      .finally(() => setLoading(false));
  }, []);

  // 🔍 Search filter logic
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // 🔢 Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // 🔁 Pagination buttons generate karna
  const renderPagination = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          className={`btn btn-sm mx-1 ${i === currentPage ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">📊 Users List (Search + Pagination)</h3>

      {/* 🔍 Search bar */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="🔍 Search by name..."
          className="form-control"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setCurrentPage(1); // Reset to page 1 when search changes
          }}
        />
      </div>

      {/* ⏳ Loading */}
      {loading && <p className="text-center">⏳ Loading users...</p>}

      {/* ❌ Error */}
      {error && <p className="text-danger text-center">❌ {error}</p>}

      {/* 🧑‍💻 Users cards */}
      <div className="row">
        {currentUsers.map((user) => (
          <div key={user.id} className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow rounded-4">
              <div className="card-body">
                <h5 className="card-title">👤 {user.name}</h5>
                <span className="badge text-bg-primary mb-2">{user.username}</span>
                <p className="card-text mb-1">📧 <strong>Email:</strong> {user.email}</p>
                <p className="card-text mb-1">
                  📍 <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}
                </p>
                <p className="card-text">
                  🌐 <strong>Geo:</strong> Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 📃 Pagination Controls */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-3">
          {renderPagination()}
        </div>
      )}
    </div>
  );
}

export default FetchUsersSearchPaginate;
