import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCampground, faFlagCheckered, faFutbol, faRunning, faVenusMars } from '@fortawesome/free-solid-svg-icons'
import './TeamDetails.css'
import malepic from '../Photo/male.png'
import femalepic from '../Photo/female.png'
import { faFacebookF, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

const TeamDetails = () => {
    let { idTeam } = useParams();
    const [team, setTeam] = useState({});

    useEffect(() => {
        let url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [idTeam])

    const { strTeam, intFormedYear, strSport, strGender, strTeamBadge, strCountry } = team;

    
    return (
        <div>
            <div className="second-banner">
                <img style={{ width: '150px', left: '50%', position: 'absolute', top: '10%' }} src={strTeamBadge} alt="" />
            </div>
            <div style={{ backgroundColor: 'darkslateblue' }}>
                <div className="team-details">
                    <Container>
                        <Row>
                            <Col style={{marginTop: '25px'}} xs={12} md={6}>
                                <h1><FontAwesomeIcon icon={faFutbol} /> {strTeam}</h1>
                                <p> <FontAwesomeIcon icon={faCampground} /> Founded: {intFormedYear}</p>
                                <p> <FontAwesomeIcon icon={faFlagCheckered} /> Country: {strCountry}</p>
                                <p> <FontAwesomeIcon icon={faRunning} /> Sport type: {strSport}</p>
                                <p> <FontAwesomeIcon icon={faVenusMars} /> Gender: {strGender}</p>
                            </Col>
                            <Col xs={12} md={6}>
                                {
                                    strGender === 'Male' ? <img style={{ height: '200px', width: '350px', float: 'right', marginTop: '20px', marginBottom: '20px' }} src={malepic} alt="" /> : null
                                }
                                {
                                    strGender === 'Female' ? <img style={{ height: '200px', width: '300px', float: 'right', marginTop: '20px', marginBottom: '20px' }} src={femalepic} alt="" /> : null
                                }
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="details">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, suscipit? Voluptatem quam odit dolorem suscipit voluptates dicta facilis expedita consequuntur provident nobis harum doloribus minima vitae, perspiciatis ad natus quis, quas rem at hic! Odio possimus incidunt similique sapiente ab odit dolorum ratione tenetur quibusdam reprehenderit. Voluptates suscipit consectetur architecto sed illo itaque mollitia ex? Aperiam, odit molestias eius ab officia voluptas molestiae cum eveniet aliquam magni debitis fuga quam repellat fugit iure! Nobis odit itaque, reprehenderit eveniet illo possimus dolores reiciendis ipsum corrupti tenetur pariatur fuga suscipit aspernatur asperiores amet a laudantium minus officia. Minus quis, in cumque temporibus, explicabo laudantium expedita amet nobis suscipit modi culpa illo error optio delectus quae unde praesentium fugit vitae minima ullam debitis mollitia molestiae earum? Vel doloremque in facilis ipsum aliquam sint numquam quas aliquid dicta tempora eaque, quidem, similique magnam? Laborum mollitia animi, qui voluptas, ea impedit soluta ducimus doloribus atque labore quos reprehenderit amet id aspernatur accusamus quaerat. Minus ipsum quis eos fugit excepturi esse possimus alias eveniet maxime hic dolores, vel, incidunt accusamus ea, nisi officiis minima? Odio asperiores eius labore, adipisci, omnis facere explicabo repellendus illum sunt quisquam voluptatem dicta sint molestiae officiis veniam tempora nesciunt placeat id.</p>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, est reiciendis dolor pariatur iure non impedit accusamus repellendus in, labore nihil consequuntur commodi itaque iste ut quae nesciunt, voluptatum nulla minima architecto inventore voluptas. Magni sit beatae quas dicta labore aliquam architecto. Mollitia culpa dolorum dignissimos, necessitatibus, sed aliquam nam similique asperiores eligendi enim totam corporis. Architecto, quam aut maxime quis aliquid aspernatur fugiat nihil sapiente optio et id, laboriosam exercitationem sit amet. Impedit, reprehenderit eos dolores numquam cumque error quisquam adipisci provident corrupti odio sequi consequatur saepe asperiores quas est! Veritatis fugit voluptatum adipisci? Dolores voluptatibus amet odio quaerat odit sint, veniam repellendus incidunt mollitia unde in distinctio adipisci maiores nesciunt doloribus aut, necessitatibus expedita est aliquam vitae a quis. Cupiditate suscipit labore vero veniam aspernatur consectetur at, omnis quidem dolorum reiciendis iste nesciunt fugit soluta. Ducimus hic nemo impedit labore animi eum quia velit voluptas. Exercitationem explicabo itaque consectetur rem iste? Quae atque inventore quam voluptatum omnis ea dolor, deleniti ipsa? Labore ipsam necessitatibus fugit voluptates error optio aliquam nobis hic velit modi ratione, iusto iste incidunt minima ipsum, id natus delectus sed eius totam corporis laborum? Laborum neque assumenda ipsum quod harum! Quo molestiae suscipit quisquam distinctio!</p>
                </div>
                <div className="icon-container">
                    <a className="icon-size" style={{ left: '45%', position: 'absolute' }} href="https://twitter.com/"><FontAwesomeIcon icon={faTwitterSquare} /></a>
                    <a className="icon-size" style={{ left: '50%', position: 'absolute' }} href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a className="icon-size" style={{ left: '55%', position: 'absolute' }} href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;