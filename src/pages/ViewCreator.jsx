import React, { useEffect, useState } from "react";
import { supabase } from "../client";

const ViewCreator = ({ selectedId }) => {
    const [creator, setCreator] = useState(null);

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
        <div>
            <h1>{creator.name}</h1>
            <p>{creator.description}</p>
            <a href={creator.url} target="_blank" rel="noopener noreferrer">Visit Channel</a>
            {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
        </div>
    );
};

export default ViewCreator;
