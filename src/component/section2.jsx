import React from 'react';
import './section2.css';
import { FaBasketballBall, FaSwimmer } from 'react-icons/fa';
import { GiBookshelf, GiGuitar } from 'react-icons/gi';

const images = [
  "https://i.pinimg.com/474x/7b/d0/b5/7bd0b5073e7abc5cb785a093ec8babcd.jpg",
  "https://i.pinimg.com/474x/a8/fe/6d/a8fe6da2e6585ad29e8d99251a63530a.jpg",
  "https://i.pinimg.com/474x/c7/d5/2f/c7d52fcdf12520587aab6e233861efda.jpg",
  "https://i.pinimg.com/474x/56/b5/32/56b5328b60526e56ffe8afaf966e5ecc.jpg",
  "https://i.pinimg.com/474x/50/ad/27/50ad27fe3fb8eab53ba149b09005453b.jpg",
  "https://i.pinimg.com/474x/1a/db/61/1adb61f9a735d16637074a6de38aab81.jpg",
  "https://i.pinimg.com/474x/eb/37/73/eb37732e9bb4ddaafd06c03f47f6308a.jpg"
];

const About = () => {
  return ( 
    <section id='About'>``
        <section className="about-section">
      <div className="about-content">
        <h1 className="title">My Favorite Things</h1>
        <div className="icons">
          <FaBasketballBall className="icon" title="Basketball" />
          <FaSwimmer className="icon" title="Swimming" />
          <GiBookshelf className="icon" title="Reading" />
          <GiGuitar className="icon" title="Music" />
        </div>

        <div className="carousel">
          <div className="carousel-track">
            {images.concat(images).map((img, i) => (
              <div className="carousel-item" key={i}>
                <img src={img} alt={`favorite-${i}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </section>
  );
};

export default About;