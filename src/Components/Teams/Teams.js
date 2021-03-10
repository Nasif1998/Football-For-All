import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css'


const Teams = (props) => {
    const { strTeamBadge, strTeam, strSport, idTeam } = props.team || {};

    const imageStyle = {
        width: '100px'
    }


    const teamStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
        textAlign: 'center',
        backgroundColor: 'rgb(211, 206, 206)'
    }
    return (
        <div>
            <div style={teamStyle}>
                <img style={imageStyle} src={strTeamBadge} alt="" />
                <h3>{strTeam}</h3>
                <p>Sport Type: {strSport}</p>
                <br/>
                <p> <Link to={`/team/${idTeam}`}>
                  <button style={{backgroundColor:'orange'}}>Explore</button>
            </Link></p>
            </div>

        </div>
    );
};

export default Teams;