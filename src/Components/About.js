import React from "react";
import img2 from "./img2.jpg";
import "./Abtus.css";

export default function About() {
 
  return (
    <div className="conatiner">
      <main className="container">
        <section className="hero">
          <h1 className="mb-5 mt-5">ABOUT US</h1>
          <img src={img2} alt="About Us" className="hero-image" />
        </section>
        <section className="content">
          <div className="grid-container">
            <div className="grid-item mb-2">
              <div className="section-box">
                <h2>Our Mission</h2>
                <p>
                  At Handmade Arts and Crafts, we are committed to promoting the
                  Make in India initiative by showcasing the talents and skills
                  of local traders and artisans. We believe that every piece of
                  handmade art is unique and has a story to tell, and we strive
                  to create a platform that allows these artists to share their
                  stories with the world.
                </p>
              </div>
            </div>
            <div className="grid-item mb-2">
              <div className="section-box">
                <h2>Our Team</h2>
                <div className="team">
                  <div className="member">
        
                    <h3>
                      <strong>Mayur</strong>
                    </h3>
                    <p></p>
                  </div>
                  <div className="member">
              
                    <h3>
                      <strong>Shrutika</strong>
                    </h3>
                    <p></p>
                  </div>
                  <div className="member">
                   
                    <h3>
                      <strong>Mahesh</strong>
                    </h3>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="section-box">
                <h2>Our Story</h2>
                <p>
                  Handmade Arts and Crafts was founded in 2021 by John Doe, a
                  passionate entrepreneur who wanted to promote the Make in
                  India initiative and support local traders and artisans. John
                  saw that there was a need for a platform that would showcase
                  the unique and beautiful handmade arts and crafts that were
                  being created in India, and he set out to create that
                  platform.
                </p>
                <p>
                  Today, Handmade Arts and Crafts is a thriving community of
                  artists, traders, and customers who are all passionate about
                  handmade art. We believe that by supporting local traders and
                  artisans, we can create a better future for everyone.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      

    </div>
  );
}
