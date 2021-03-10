import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import Teams from '../Teams/Teams';
import './Home.css'


const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])
    return (
        <div>
            <div className="top-banner">
              <h1 style={{textAlign: 'center', color: 'rgb(236, 209, 140)', top: '30%', lineHeight: '200px'}}>Football For All</h1>
            </div>
            <div className="home-design">
            <Container>
                <Row>
                    {
                        teams.map(team =>(
                            <Col xs={12} md={4}>
                            <Teams team={team}></Teams>
                            </Col>
                            ))
                    }
                </Row>
            </Container>
            </div>
        </div>
    );
};

export default Home;