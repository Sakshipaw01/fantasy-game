import React from 'react';
import { Link } from 'react-router-dom';

const TeamPage = () => {
    return (
        <div className="form-container">
            <h2 className="form-title">Your Fantasy Team</h2>
            <p>Team details and player selection form will be here...</p>

            <div className="back-home">
                <Link to="/">Back to Home</Link>
            </div>
        </div>
    );
};

export default TeamPage;
