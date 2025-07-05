// src/pages/AddCreator.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCreator = ({ onAdd }) => {
    const [formData, setFormData] = useState({
        name: "",
        url: "",
        description: "",
        imageURL: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(formData);
        setFormData({ name: "", url: "", description: "", imageURL: "" });
    };

    return (
        <div className="AddEditCreator">
            <form id="addCreatorForm" onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        name="name"
                        placeholder="Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    URL
                    <input
                        name="url"
                        placeholder="https://www.youtube.com/@channelname"
                        required
                        value={formData.url}
                        onChange={handleChange}
                    />
                    <p>Include the full URL (e.g., https://www.youtube.com/@channelname)</p>
                </label>

                <label>
                    Description
                    <textarea
                        name="description"
                        placeholder="Description"
                        rows="3"
                        required
                        value={formData.description}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Image URL (optional)
                    <input
                        name="imageURL"
                        placeholder="Image URL"
                        value={formData.imageURL}
                        onChange={handleChange}
                    />
                </label>

                <div className="form-buttons">
                    <button type="submit">Add Creator</button>
                    <button type="button" onClick={() => navigate("/")}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default AddCreator;
