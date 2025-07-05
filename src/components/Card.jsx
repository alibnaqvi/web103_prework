import React from "react";

const Card = ({ creator, onView, onEdit, onDelete }) => {
    const { name, url, description, imageURL } = creator;

    // Helper function to ensure URL has proper protocol
    const formatUrl = (url) => {
        if (!url) return "#";
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        }
        return `https://${url}`;
    };

    return (
        <div className="card">
            {imageURL && <img src={imageURL} alt={name} className="card-img" />}
            <h2>{name}</h2>
            <p>{description}</p>
            <a href={formatUrl(url)} target="_blank" rel="noopener noreferrer">
                Visit Channel
            </a>
            <div className="card-buttons">
                <button onClick={() => onView(creator.id)}>👁️ View</button>
                <button onClick={() => onEdit(creator.id)}>✏️ Edit</button>
                <button onClick={() => onDelete(creator.id)}>🗑️ Delete</button>
            </div>
        </div>
    );
};

export default Card;
