import React from "react";

const Card = ({ creator, onView, onEdit, onDelete }) => {
    const { name, url, description, imageURL } = creator;

    return (
        <div className="card">
            {imageURL && <img src={imageURL} alt={name} className="card-img" />}
            <h2>{name}</h2>
            <p>{description}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">
                Visit Channel
            </a>
            <div>
                <button onClick={() => onView(creator.id)}>View</button>
                <button onClick={() => onEdit(creator.id)}>Edit</button>
                <button onClick={() => onDelete(creator.id)}>Delete</button>
            </div>
        </div>
    );
};

export default Card;
