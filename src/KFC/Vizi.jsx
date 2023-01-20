import React from 'react'
import vizi from "../img/hare.png";
import ers from "../img/teleg.svg";
import ex from "../img/ecw.png";
import '../KFC/vizi.css'
const Vizi = () => {
  return (
    <div className='yes d-flex'>
        <div>
            <img style={{width: '500px', marginTop: '64px',marginLeft: '100px'}} src={vizi} alt="" />
        </div>
        <div className='fef'>
            <h3>O'z joyingizda KFCdan zavqlaning!</h3>
            <h6>Yetkazib berish buyurtmalari hozirda orqali amalga <br /> oshirilmoqda</h6>
            <div>
                <img className='ico' src={ex} alt="" />
                <img className='ico1' src={ers} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Vizi