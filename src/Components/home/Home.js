import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../image/img1.jpg'
import img2 from '../../image/img2.jpeg'
import img3 from '../../image/img3.jpg'
import './Home.css'

const Home = () => {
    return (
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption className='color'>
      <h3>Chicken Burger</h3>
      <p>Today, no one goes for a burger without coming back with a picture or two. That time over a burger with friends or family is worth sharing and you would want others to see the time you had.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption className='color'>
      <h3>The Testy barger</h3>
      <p>Today, no one goes for a burger without coming back with a picture or two. That time over a burger with friends or family is worth sharing and you would want others to see the time you had.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption className='color'>
      <h3>Crispy Chicken Burger</h3>
      <p>Today, no one goes for a burger without coming back with a picture or two. That time over a burger with friends or family is worth sharing and you would want others to see the time you had.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Home;