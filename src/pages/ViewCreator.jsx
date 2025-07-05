import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";

const ViewCreator = ({ selectedId }) => {
    const [creator, setCreator] = useState(null);
    const navigate = useNavigate();

    // Helper function to ensure URL has proper protocol
    const formatUrl = (url) => {
        if (!url) return "#";
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        }
        return `https://${url}`;
    };

    useEffect(() => {
        const fetchCreator = async () => {
            const { data, error } = await supabase
                .from("creators")
                .select("*")
                .eq("id", selectedId)
                .single();

            if (!error) setCreator(data);
            else console.error("Error fetching creator:", error.message);
        };

        if (selectedId) fetchCreator();
    }, [selectedId]);

    if (!creator) return <p>Loading...</p>;

    return (
        <div className="view-creator">
            <h1>{creator.name}</h1>
            <p>{creator.description}</p>
            {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
            <div className="view-creator-buttons">
                <a href={formatUrl(creator.url)} target="_blank" rel="noopener noreferrer">Visit Channel</a>
                <button onClick={() => navigate("/")}>← Back to All Creators</button>
            </div>
        </div>
    );
};

export default ViewCreator;
