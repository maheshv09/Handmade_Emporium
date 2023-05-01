import React from "react";
import "./AboutUser.css";

const AboutUser = ({username}) => {
  return (
    <div className="container pt-1" style={{backgroundColor:'white', borderRadius:'8px', boxShadow:"0px 0px 4px 2px grey", maxWidth:'1060px'}}>
      <div className="row mt-5">
        <div className="col-12 col-md-4">
          <div className="d-flex flex-column align-items-center">
            <div className="rounded-circle mb-3" style={{border:"1px solid wheat", borderRadius:'50%'}}>
              <img
                src="https://source.unsplash.com/200x200/?person
                "
                alt="User Profile"
                className="img-thumbnail"
              />
            </div>
            <h3 style={{fontFamily: 'Gelasio'}}>{username}</h3>
            <div className="d-flex mb-3" >
              <a href="#" className=" icon-link me-3 mx-3" style={{fontSize:'25px'}}>
                <i className="fa fa-envelope"></i>
              </a>
              <a href="#" className="icon-link me-3" style={{fontSize:'25px'}}>
                <i className="fa fa-phone"></i>
              </a>
             
            </div>
          </div>
        </div>
        <div className="col-12 col-md-1">
          <div style={{borderLeft: "1px solid lightgrey", height: "250px"}}></div>
        </div>
        <div className="col-12 col-md-7">
          <div className="profile-description" style={{border:'none'}}>
            <h2 style={{textDecoration:'underline',fontFamily: 'Lobster Two'}}>About Me</h2>
            <p style={{fontFamily: 'Charm'}}>
            As a seller who creates handmade products, I take pride in the quality and uniqueness of each item. Each piece is crafted with care and attention to detail, making it a truly one-of-a-kind creation. From hand-sewn clothing to hand-carved wooden figurines, my products are a reflection of my passion for crafting and my dedication to creating something special. Whether you're looking for a special gift for a loved one or a unique item to add to your home decor, I am confident that you will find something that speaks to you in my collection. Shop with me today and experience the joy of owning a handmade treasure!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUser;

