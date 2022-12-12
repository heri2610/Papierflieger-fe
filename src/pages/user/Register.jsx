import React from 'react';
import bannerPesawat from '../../assets/images/bannerPesawat.svg';
import Register from '../../components/User/Register/Register';

function RegisterPage() {
  return (
    <div>
      <img src={bannerPesawat} alt="banner pesawat" className='w-100' />
      <Register />
    </div>
  );
}

export default RegisterPage;