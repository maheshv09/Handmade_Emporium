import React, { useEffect, useState } from 'react';

const Test = () => {
  const [maxWidth, setMaxWidth] = useState('60%');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setMaxWidth('90%');
      } else {
        setMaxWidth('60%');
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  return (
    <div className='container mt-3' style={{ maxWidth }} >

      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{ boxShadow: '0px 0px 7px 2px grey' }}>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="https://theartcore.com/wp-content/uploads/2020/06/Handmade-Bags.jpg" className="d-block w-100" style={{ height: "30rem" }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ fontFamily: 'Castoro Titling' }}>Gift: "Unwrap the Joy"</h5>
              <p style={{ color: 'white', fontFamily: 'Dancing Script, cursive' }}>Find the perfect handmade gift for any occasion, from jewelry to home decor.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://img.freepik.com/premium-photo/materials-equipment-thai-otop-product-from-dry-catathea-grass-weave-as-basketry_34031-111.jpg?w=996" className="d-block w-100" style={{ height: "30rem" }} alt="..." />

            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ fontFamily: 'Castoro Titling' }}>Kitchen: "Whip Up Something Special"</h5>
              <p style={{ color: 'white', fontFamily: 'Dancing Script, cursive' }}>Cook up something special with our handcrafted kitchenware.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/free-photo/moroccan-stuff_181624-36914.jpg?w=996&t=st=1682671774~exp=1682672374~hmac=0f22882202197374a0616f651c2caffc19330cb0110d8902ddd24e1d0cb5b803" className="d-block w-100" style={{ height: "30rem" }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ fontFamily: 'Castoro Titling' }}>Decore the place</h5>
              <p style={{ color: 'white', fontFamily: 'Dancing Script, cursive' }}>Transform your space with one-of-a-kind handmade decorations.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Test
