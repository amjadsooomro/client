import React, { useState } from "react";
import axios from "axios";

const UserForm = ({ fetchUsers }) => {
    const [formData, setFormData] = useState({ name: "", age: "", email: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:5000/submit", formData);
            alert("✅ User added successfully!");
            setFormData({ name: "", age: "", email: "" }); // Reset form
            fetchUsers(); // Refresh user list
        } catch (error) {
            console.error("❌ Error:", error);
            alert("❌ Failed to add user.");
        }
    };

    return (
        <div>
            <h2>Enter User Details</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UserForm;
