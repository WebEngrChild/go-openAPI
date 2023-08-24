'use client';
import { useState } from 'react';
import { components } from '@/generated';  // 1. 自動生成されたコードのパスを正確に指定してください。

export default function Client() {
    const [message, setMessage] = useState<string>("");

    const fetchHello = async () => {
        try {
            const res = await fetch('http://localhost:8080/hello');
            const data: components["schemas"]["hello"] = await res.json();  // 2. APIのレスポンスの型を指定
            if (data.message) {   // data.messageが存在する場合に設定
                setMessage(data.message);
            }
        } catch (error) {
            console.error("Error fetching hello:", error);
        }
    };

    const fetchGoodbye = async () => {
        try {
            const res = await fetch('http://localhost:8080/goodbye');
            const data: components["schemas"]["goodbye"] = await res.json();  // 2. APIのレスポンスの型を指定
            if (data.message) {   // data.messageが存在する場合に設定
                setMessage(data.message);
            }
        } catch (error) {
            console.error("Error fetching goodbye:", error);
        }
    };

    return (
        <div>
            <button onClick={fetchHello}>こんにちは</button>
            <br></br>
            <button onClick={fetchGoodbye}>さようなら</button>
            <p>{message}</p>
        </div>
    );
}
