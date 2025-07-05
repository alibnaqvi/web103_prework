import React, { useEffect, useState } from 'react';
import {useRoutes, useNavigate, Link} from 'react-router-dom';
import { supabase } from './client';

import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import EditCreator from "./pages/EditCreator";
import AddCreator from "./pages/AddCreator";

import './App.css';

function App() {
    const [creators, setCreators] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCreators = async () => {
            const { data, error } = await supabase.from("creators").select("*");
            if (error) console.error(error);
            else setCreators(data);
        };

        fetchCreators();
    }, []);

    const handleAdd = async (newCreator) => {
        const { data, error } = await supabase.from("creators").insert([newCreator]).select();
        if (!error && data) {
            setCreators(prev => [...prev, data[0]]);
            navigate("/");
        }
    };

    const handleUpdate = async (updatedCreator) => {
        const { data, error } = await supabase
            .from("creators")
            .update(updatedCreator)
            .eq("id", updatedCreator.id)
            .select();

        if (!error && data) {
            setCreators(prev => prev.map(c => (c.id === updatedCreator.id ? data[0] : c)));
            navigate("/");
        }
    };

    const handleDelete = async (id) => {
        const { error } = await supabase.from("creators").delete().eq("id", id);
        if (!error) {
            setCreators(prev => prev.filter(c => c.id !== id));
        }
    };

    const routes = useRoutes([
        {
            path: "/",
            element: (
                <ShowCreators
                    creators={creators}
                    onView={id => {
                        setSelectedId(id);
                        navigate("/view");
                    }}
                    onEdit={id => {
                        setSelectedId(id);
                        navigate("/edit");
                    }}
                    onDelete={handleDelete}
                />
            )
        },
        {
            path: "/view",
            element: <ViewCreator selectedId={selectedId} />
        },
        {
            path: "/edit",
            element: <EditCreator creator={creators.find(c => c.id === selectedId)} onUpdate={handleUpdate} />
        },
        {
            path: "/new",
            element: <AddCreator onAdd={handleAdd} />
        }
    ]);

    return (
        <div className="App">
            {/* ---------- Site Header & Nav ---------- */}
            <header>
                <h1>Creatorverse</h1>
                <nav>
                    <ul>
                        <li><Link to="/">View All Creators</Link></li>
                        <li><Link to="/new">Add a Creator</Link></li>
                    </ul>
                </nav>
            </header>
            {/* ---------- Routed Pages ---------- */}
            <main>
                {routes}
            </main>
        </div>
    );
}

export default App;
