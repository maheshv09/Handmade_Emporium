import React from 'react';
import { useParams } from 'react-router-dom';
import ProductData from './ProductData';
import AboutUser from './AboutUser';
import { useState } from 'react';

const Profile = ({handleAddToCart}) => {
  
  const { username } = useParams();

  return (
    <div className='conatiner mt-5'>
     
      <AboutUser username={username}></AboutUser>
      <ProductData username={username} handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default Profile;
