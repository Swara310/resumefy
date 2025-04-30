import React, { useEffect, useState } from "react";
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  // Check if user was registered in last 5 minutes
  const isNewUser = (createdAt) => {
    const now = new Date();
    const created = new Date(createdAt);
    const diffInMinutes = (now - created) / (1000 * 60);
    return diffInMinutes < 5;
  };

  useEffect(() => {
    const fetchUsers = () => {
      fetch("http://localhost:5000/api/auth/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => console.error("Error fetching users:", err));
    };

    fetchUsers();

    // Refresh every 10 seconds to reflect updates or new registrations
    const interval = setInterval(fetchUsers, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="admin-dashboard">
      <h2 className="admin-title">Admin Dashboard - Registered Users</h2>
      <p className="user-count">Total Users: {users.length}</p>
      {users.length === 0 ? (
        <p className="no-users">No users found.</p>
      ) : (
        <div className="users-list">
          {users.map((user) => (
            <div className="user-card" key={user._id}>
             {user.profilePicture && (
                 <div className="profile-picture-url">
                   <span className="label">Profile Picture:</span>{" "}
                   <img  src={user.profilePicture}  alt="Profile"  style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }}/>
                </div>
              )}
              <p><span className="label">Name:</span> {user.name}</p>
              <p><span className="label">Email:</span> {user.email}</p>
              
              {user.phone && (
                <p><span className="label">Phone:</span> {user.phone}</p>
              )}
              <p><span className="label">Created At:</span> {new Date(user.createdAt).toLocaleString()}</p>
              <p><span className="label">Updated At:</span> {new Date(user.updatedAt).toLocaleString()}</p>

              {isNewUser(user.createdAt) && (
                <p className="new-user-tag">🆕 Newly Registered</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
