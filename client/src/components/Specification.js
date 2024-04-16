// src/components/Specification.js
import React, { useState, useEffect } from 'react';

const Specification = () => {
    const [specifications, setSpecifications] = useState([]);

    // Функция для загрузки данных
    const fetchSpecifications = async () => {
        try {
            const response = await fetch('/api/specifications');  // Путь к вашему API
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            setSpecifications(data);
        } catch (error) {
            console.error("Failed to fetch specifications:", error);
        }
    };

    // Загрузка данных при монтировании компонента
    useEffect(() => {
        fetchSpecifications();
    }, []);

    return (
        <div>
            <h2>Specifications</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Parent ID</th>
                        <th>Description</th>
                        <th>Quantity Per Parent</th>
                        <th>Measure</th>
                    </tr>
                </thead>
                <tbody>
                    {specifications.map(spec => (
                        <tr key={spec.Id}>
                            <td>{spec.Id}</td>
                            <td>{spec.ParentId}</td>
                            <td>{spec.Description}</td>
                            <td>{spec.QuantityPerParent}</td>
                            <td>{spec.Measure}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Specification;
