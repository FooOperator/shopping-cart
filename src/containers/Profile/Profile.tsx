import useAuth0 from '@auth0/auth0-react/src/use-auth0'
import React from 'react'

const Profile = () => {
    const { user } = useAuth0();

    return (
        <div>Profile</div>
    )
}

export default Profile;