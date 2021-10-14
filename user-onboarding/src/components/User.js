import React from 'react';

function User({ details }) {
    if (!details) {
        return <h3>I'm trying!</h3>
    }

    return (
        <div>
            <h2>List of Users</h2>

            <h3>{details.firstName} {details.lastName}</h3>
            <p>Email: {details.email}</p>
        </div>
    )
}

export default User