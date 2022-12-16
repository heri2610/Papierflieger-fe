import React from 'react';
import FormEditProfile from '../../components/User/FormProfile/FormProfile';
import {Button} from 'react-bootstrap';
import './Profile.scss';

import {Link} from 'react-router-dom'

const EditProfile = () => {
  return (
    <div className="edit-profile mt-3">
      <div>
      <br/>
        <FormEditProfile/>
        <div className="edit-button">
          <Button className="btn-primary mb-5" type="submit" value="Submit">
            Simpan
          </Button>
        </div>
      </div>
    </div>
  )
}

export default EditProfile