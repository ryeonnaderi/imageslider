import './App.css';

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


import image1 from "./img/image1.jpg"
import image2 from "./img/imag2.jpeg"
// import image3 from "./img/image3.jpg"
import { Button } from 'react-bootstrap';


function App() {
  const pressed =(e) => {
    e.preventDefault();
    console.log("pressed");
  }
  return (
    <div className="App">
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <Button onClick={pressed} > <img src={image1} className='sliderimg' alt='' />press</Button>
        <Button onClick={pressed} > <img src={image2} className='sliderimg' alt='' /> press </Button>
        <Button><iframe width="1280" height="720" src="https://www.youtube.com/embed/Nf6r09N6_8M" title="This New Spy Game is Hilarious" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </Button>
      </AliceCarousel>
    </div>
  );
}

export default App;
