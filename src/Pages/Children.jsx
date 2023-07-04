import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

const Children = ({ selectedData }) => {
    const [data, setData] = useState([]);
    const [currentData, setCurrentData] = useState(null);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    useEffect(() => {
        if (selectedData) {
            const { id } = selectedData;
            const defaultData = data.find(d => d.id === id);
            setCurrentData(defaultData);
        }
    }, [data, selectedData]);

    return (
        <div className="text-center">
            {currentData && (
                <Card style={{ width: '18rem', margin: '0 auto' }}>
                    <Card.Body>
                        <Card.Title>{currentData.Name}</Card.Title>
                        <Card.Text>Price: Rs.{currentData.Price}</Card.Text>
                        <Card.Title>Item Id: {currentData.id}</Card.Title>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default Children;
