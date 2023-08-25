'use client';
import { useState } from 'react';

export default function Client() {
    const [message, setMessage] = useState("");

    const fetchHello = async () => {
        try {
            const res = await fetch('http://localhost:8080/hello');
            const data = await res.json();
            setMessage(data.message);
        } catch (error) {
            console.error("Error fetching hello:", error);
        }
    };

    const fetchGoodbye = async () => {
        try {
            const res = await fetch('http://localhost:8080/goodbye');
            const data = await res.json();
            setMessage(data.message);
        } catch (error) {
            console.error("Error fetching hello:", error);
        }
    };

    return (
        <div>
            <button onClick={fetchHello}>こんにちは</button>
            <button onClick={fetchGoodbye}>さようなら</button>
            <p>{message}</p>
        </div>
    );
}
