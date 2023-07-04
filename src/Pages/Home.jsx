import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Children from './Children';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    const [data, setData] = useState([]);
    const [selectedData, setSelectedData] = useState(null);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
   

    const handleSelectedData = (e)=>{
        const selectedId = e.target.value;
       // console.log(selectedId);
        const datum = data.find(d => d.id == selectedId);

        setSelectedData(datum);
        
    }
    useEffect(() => {
        const defaultData = data.find(d => d.id == '3');
        setSelectedData(defaultData);
        
    }, [data]);
    console.log(selectedData);
    return (
        <div className='m-5 p-5'>
            
            <Container>
                <Row>
                    <Col>
                        <Form.Select aria-label="Default select example" onChange={handleSelectedData}>
                            <option>Open this select menu</option>
                            {data.map(d => <option
                                key={d.id}
                                value={d.id}
                            >
                                {d.Name}
                            </option>)}

                        </Form.Select>
                    </Col>
                    <Col>
                        <div>
                            <Children selectedData={selectedData}></Children>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;