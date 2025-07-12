import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

/*
🧠 Theory (Hindi में):

useEffect ek React hook hai jo kisi bhi side-effect (jaise: API call) ko handle karta hai.
Yeh hook tab chalta hai jab component render ya update hota hai.

Is example me:
✅ API call hoga jab component mount hoga
✅ Users ka data fetch hoga
✅ Loading spinner dikhayenge jab tak data aaye
✅ Agar error aaye to error message show karenge
✅ Users ka naam, email, address, latitude & longitude sab show karenge
*/

function FetchUsers() {
  const [users, setUsers] = useState([]);       // 🔹 API data yaha store hoga
  const [loading, setLoading] = useState(true); // 🔹 Jab tak data aata hai, loading true
  const [error, setError] = useState(null);     // 🔹 Agar error aaye to store hoga

  useEffect(() => {
    // ✅ API call start
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) {
          throw new Error('API Failed'); // ❌ agar response ok nahi
        }
        return res.json(); // ✅ response ko JSON me convert
      })
      .then((data) => {
        setUsers(data); // ✅ data state me store karo
        setLoading(false); // ✅ loading false
        toast.success('✅ Users loaded successfully!'); // 🎉 success toast
      })
      .catch((err) => {
        setError(err.message); // ❌ error toast
        toast.error('🚫 Failed to load users');
        setLoading(false); // ✅ loading false even on error
      });
  }, []); // 👈 empty dependency array = sirf component mount hone par chalega

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">📋 Users Data (API + useEffect)</h3>

      {/* ⏳ Loading Spinner */}
      {loading && <p className="text-center">⏳ Loading users...</p>}

      {/* ❌ Error Show */}
      {error && <p className="text-danger text-center">❌ Error: {error}</p>}

      {/* ✅ User Cards */}
      <div className="row">
        {users.map((user) => (
          <div key={user.id} className="col-md-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">👤 {user.name}</h5>
                <p className="card-text mb-1">
                  📧 <strong>Email:</strong> {user.email}
                </p>
                <p className="card-text mb-1">
                  📍 <strong>Address:</strong> {user.address.street}, {user.address.suite},<br />
                  {user.address.city} – {user.address.zipcode}
                </p>
                <p className="card-text">
                  🌐 <strong>Geo:</strong> Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchUsers;
