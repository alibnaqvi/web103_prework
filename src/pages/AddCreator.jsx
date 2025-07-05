// src/pages/AddCreator.jsx
import React, { useState } from "react";

const AddCreator = ({ onAdd }) => {
    const [formData, setFormData] = useState({
        name: "",
        url: "",
        description: "",
        imageURL: ""
    });

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
                        placeholder="URL"
                        required
                        value={formData.url}
                        onChange={handleChange}
                    />
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
                    Image URL
                    <input
                        name="imageURL"
                        placeholder="Image URL"
                        required
                        value={formData.imageURL}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">Add Creator</button>
            </form>
        </div>
    );
};

export default AddCreator;
