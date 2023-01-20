import React from 'react'
import "../KFC/hede.css";
import kfc from "../img/4279.svg";
import halal from "../img/halal.png";
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';
import { BsTelegram } from 'react-icons/bs';
import chi from "../img/stripes.png";
const hede = () => {
  return (
    <div className='yow '>
        <div className="d-flex">
        <div>
        <img className='sw' src={kfc} alt="" />
        <h6 className='teo'><BsFillTelephoneFill style={{color: 'red'}}/> +998 (78) 129 70 00</h6>
        </div>
        <div className='olma'>
            <h6>Maʼlumot</h6>
            <p>Tarix <br />
            11 tarkibiy mahsulotlar! <br />
            Allergenlar & To'yimli <br />
            Doʻkonlar <br />
            HALAL</p>
        </div>
        <div className='banab'>
            <h6>Yordam kerakmi?</h6>
            <p>Biz bilan bog’lanish <br />
                KFC’ga ishga qabul qilish
            </p>
        </div>
        <div style={{marginLeft: '30px'}}>
            <h6 style={{color: 'red', marginTop: '40px'}}>Bizni kuzating</h6>
            <FaInstagramSquare style={{fontSize: '30px'}}/>
            <ImFacebook2 style={{fontSize: '26px',marginLeft:'10px'}}/>
            <BsTelegram style={{fontSize: '28px',marginLeft:'10px'}}/>
        </div>
        <div>
        <button className="btn btn-success dew"><div className="d-flex"><img className='ha' width={'50px'} src={halal} alt="" /><h6 className='haw' style={{marginTop: '5px'}}>HALAL</h6></div></button>
        </div>
        </div>
        <div className='tugadi d-flex'>
            <h6 className='sq'>Maxfiylik siyosati Shartlar va shartlar</h6>

            <div className='we3'>
            <h6 className='sq'>© Copyright 2023 KFC UZ All Rights Reserved.</h6>
            <img style={{width: '335px'}} src={chi} alt="" />
            </div>

        </div>
    </div>
  )
}

export default hede