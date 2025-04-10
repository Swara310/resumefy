import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert
import '../styles/Account.css';
import {url} from '../api/apiendpoint';
function Account() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profilePicture, setProfilePic] = useState(null);
  const [profilePicFile, setProfilePicFile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('authToken');

        if (!token) {
          Swal.fire("Error", "Please log in again.", "error");
          return;
        }

        const res = await axios.get(url+'/api/auth/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });

        const { fullName, email, phone, profilePicture } = res.data;
        setName(fullName);
        setEmail(email);
        setPhone(phone);
        setProfilePic(profilePicture);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        if (error.response && error.response.status === 401) {
          Swal.fire("Unauthorized", "Unauthorized access - please log in again.", "error");
        }
      }
    };

    fetchProfile();
  }, []);

  const handleSaveChanges = async () => {
    try {
      const token = localStorage.getItem('authToken');
  
      if (!token) {
        throw new Error("No token found");
      }
  
      const formData = new FormData();
      formData.append('fullName', name);
      formData.append('email', email);
      formData.append('phone', phone);
      if (profilePicFile) {
        formData.append('profilePicture', profilePicFile);
      }
  
      await axios.put(
        url+'/api/auth/profile',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
  
      Swal.fire("Success", "Profile updated successfully!", "success");
    } catch (error) {
      console.error("Error updating profile:", error);
      if (error.response && error.response.status === 401) {
        Swal.fire("Unauthorized", "Unauthorized access - please log in again.", "error");
      } else {
        Swal.fire("Error", "Failed to update profile", "error");
      }
    }
  };
  
  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-pic-container">
        <img
          src={profilePicture || "https://via.placeholder.com/150"}
          alt="Profile"
          className="profile-pic"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              setProfilePicFile(file);
              setProfilePic(URL.createObjectURL(file));
            }
          }}
          className="upload-button"
        />
      </div>

      <div className="profile-details">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Phone:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>

        <button onClick={handleSaveChanges} className="save-button">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Account;