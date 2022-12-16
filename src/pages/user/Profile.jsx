import React from 'react';
import { Button } from 'react-bootstrap'
import FormProfile from '../../components/User/FormProfile/FormProfile';
import './Profile.scss';

import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
        <FormProfile/>
        <div className="edit-button">
        <Link to="/profile/edit" style={{textDecoration:"none"}}>
          <Button className="btn-primary mb-5" type="submit" value="Submit">
            Edit Profil
          </Button>
          </Link>
        </div>
    </div>
  )
}

export default Profile