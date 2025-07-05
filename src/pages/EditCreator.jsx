import React, { useState } from "react";

const EditCreator = ({ creator, onUpdate }) => {
    const [formData, setFormData] = useState({ ...creator });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={formData.name} onChange={handleChange} />
            <input name="url" value={formData.url} onChange={handleChange} />
            <textarea name="description" value={formData.description} onChange={handleChange} />
            <input name="imageURL" value={formData.imageURL} onChange={handleChange} />
            <button type="submit">Update Creator</button>
        </form>
    );
};

export default EditCreator;
