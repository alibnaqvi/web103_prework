import React from "react";
import Card from "../components/Card";

const ShowCreators = ({ creators, onView, onEdit, onDelete }) => {
    if (!creators || creators.length === 0) {
        return <p>No content creators found. Add one!</p>;
    }

    return (
        <div>
            <h1>All Creators</h1>
            {creators.map(creator => (
                <Card
                    key={creator.id}
                    creator={creator}
                    onView={onView}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default ShowCreators;
