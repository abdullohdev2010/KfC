import React from 'react'
import kfc from "../img/4279.svg";
import halal from "../img/halal.png";
import '../KFC/Navbar.css'
import { BsFillTelephoneFill } from 'react-icons/bs';
const Navbar = () => {
  return (
    <div className='navba d-flex'>
        <img className='logo' width={"90px"} src={kfc} alt="" />
        <div className="d-flex s">
        <div className="btna">
          <button className='btn btn-danger'><h6>KARYERA</h6></button>
        <button className='btn btn-danger'><h6>RESTORANLAR</h6></button>
        <button className="btn btn-success"><div className="d-flex"><img className='ha' width={'50px'} src={halal} alt="" /><h6 className='haw'>HALAL</h6></div></button>
        <button className='btn btn-danger'><h6>MENUNI KO'RISH</h6></button>
          </div>
        <h6 className='tele'><BsFillTelephoneFill className='ico'/> +998 (78) 129 70 00</h6>
      <div class="btn-group" role="group">
          <button type="button" class="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <h6>UZ</h6>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#"><h6>RU</h6></a></li>
            <li><a class="dropdown-item" href="#"><h6>ENG</h6></a></li>
          </ul>
     </div>
        </div>
    </div>
  )
}

export default Navbar