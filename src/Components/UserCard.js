import React from 'react';
import { Link } from 'react-router-dom';
import './UserCard.css';

const UserCard = ({ data }) => {
  return (
    <div className='container' style={{maxWidth:"1300px"}}>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-2 mx-3" style={{marginBottom: '15px'}}>
        {data.map((curElm) => {
          const { id, product, category, image, description, username } = curElm;
          return (
            <div className="col" key={id}>
              <div className="card h-100">
                <img
                  src={image}
                  className="card-img-top"
                  alt="..."
                  style={{ objectFit: 'cover', height: '300px' }}
                />
                <div className="card-body">
                  <h4 className="card-title text" style={{ textAlign: 'center' }}><strong>{product}</strong></h4>
                  <span className="card-subtitle " style={{ textAlign: 'center',fontSize:'1.3rem',fontFamily: 'Signika' }}>{category}</span>
                  <p style={{fontSize:'0.8rem'}}className="card-text">{description}</p>
                  <Link to={`/profile/${username}`} className="btn btn-primary">VISIT</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <style>
        {`
          @media (max-width: 992px) {
            .row-cols-md-3 > * {
              flex: 0 0 50%;
              max-width: 50%;
            }
          }

          @media (max-width: 768px) {
            .row-cols-md-3 > * {
              flex: 0 0 100%;
              max-width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default UserCard;
