import React from 'react';

import bannerHome from '../../../assets/images/spanduk.jpg';
import './banner.scss';

const Banner = () => {
  return (
    <div className="container-fluid p-0 home" id="main">
      <img src={bannerHome} className="w-100" alt="banner" />
    </div>
  );
};

export default Banner;