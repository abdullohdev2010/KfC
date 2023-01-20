import React from 'react'
import '../KFC/Carusel.css'
import caru1 from "../img/caru1.jpg";
import caru2 from "../img/caru2.jpg";
import caru3 from "../img/caru3.jpg";
import caru4 from "../img/caru4.jpg";
import caru5 from "../img/caru5.jpg";
const Carusel = () => {
  return (
    <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={caru4} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={caru5} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={caru3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={caru5} className="d-block w-100" alt="..."/>
    </div>
  </div>
    <div className='d-flex'>
    <div className='salom'>
    <button style={{width: '100px'}} className="carousel-control-prev d" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
    </div>
    <div className="salom1">
    <button style={{width: '100px'}} className="carousel-control-next sd" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    </div>
    </div>
</div>
    </div>
  )
}

export default Carusel