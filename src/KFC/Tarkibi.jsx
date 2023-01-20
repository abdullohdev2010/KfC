import React from 'react'
import '../KFC/Tarkibi.css'
const Tarkibi = () => {
  return (
    <div className='tarkib'>
        <div className="sa d-flex">
        <div className='nima'>
            <center>
            <h6 style={{color: 'white', marginTop:'100px', fontSize:'20px'}}>Bizga o'zingizning fikringizni bildiring</h6>
            <p style={{color:'white'}}>Biz bilan tajribangizni baholang va bizga yaxshiroq bo'lishga <br /> yordam bering.</p>
            <button className='btn btn-danger'>AQSH NARXI</button>
            </center>
        </div>
        <div className='nima1'>
        <center>
            <h6 style={{color: 'white', marginTop:'100px', fontSize:'20px'}}>11 tarkibiy mahsulotlar</h6>
            <p style={{color:'white'}}>Oziq-ovqatimizni o'zgacha qiladigan narsa.</p>
            <button className='btn btn-danger jjh'>ULARNI KASH ETING</button>
            </center>
        </div>
        </div>
    </div>
  )
}

export default Tarkibi