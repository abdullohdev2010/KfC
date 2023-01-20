import React from 'react'
import '../KFC/Menu.css'
import menu1 from "../img/menu1.jpg";
import menu2 from "../img/menu2.jpg";
import menu3 from "../img/menu3.jpg";
import menu4 from "../img/menu4.jpg";
const Menu = () => {
  return (
    <div>
        <h3 className='tav'>Tavsiya etilgan</h3>
        <div className='hr'></div>
        <div className='d-flex hama'>
        <div class="card had" style={{width: "18rem",marginLeft:'100px'}}>
        <img src={menu1} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 align='center' style={{fontSize: '17px'}} class="card-title">CHIZBURGER DE LYUKS</h5>
        <p style={{marginTop: '10px'}} class="card-text fon">Xantalli sous, ketchup, original <br /> panirovkada tovuq go‘shti,<br /> piyoz, chedder pishlog‘i, <br /> bodring va pomidor tilimchalari,</p>
        <a style={{width: '255px'}} href="#" class="btn btn-danger"><h6  className='pa'>20 000 UZS</h6></a>
        </div>
        </div>
        <div class="card had" style={{width: "18rem",marginLeft:'10px'}}>
        <img src={menu2} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 align='center' style={{fontSize: '17px'}} class="card-title">BASKET M (18 ACHCHIQ QANOT)</h5>
        <p style={{marginTop: '10px'}} class="card-text fon">Achchiq panirovkadagi 18 ta <br />tovuq qanotchalari</p>
        <a style={{width: '255px',marginTop: '28px'}} href="#" class="btn btn-danger"><h6  className='pa'>20 000 UZS</h6></a>
        </div>
        </div>
        <div class="card had" style={{width: "18rem",marginLeft:'10px'}}>
        <img src={menu3} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 align='center' style={{fontSize: '17px'}} class="card-title">TVISTER ORIGINAL</h5>
        <p style={{marginTop: '10px'}} class="card-text fon">Original panirovkada yumshoq <br /> tovuq go‘shti, salat bargi,<br /> pomidor bo‘laklari, sous va <br /> bug‘doy noni. </p>
        <a style={{width: '255px'}} href="#" class="btn btn-danger"><h6  className='pa'>80 000 UZS</h6></a>
        </div>
        </div>
        <div class="card had" style={{width: "18rem",marginLeft:'10px'}}>
        <img src={menu4} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 align='center' style={{fontSize: '17px'}} class="card-title">Big Sanders burger</h5>
        <p style={{marginTop: '10px'}} class="card-text fon">Original Big Sanders burger – <br /> nihoyatda katta va ishtahaochar! <br /> U ko‘p pishloq, barra sabzavotlar <br /> va sous, og‘izda eriydigan</p>
        <a style={{width: '255px'}} href="#" class="btn btn-danger"><h6  className='pa'>34 000 UZS</h6></a>
        </div>
        </div>
        </div>
        <center>
        <div class="card had" style={{width: "18rem",marginLeft:'10px', marginTop:'20px'}}>
        <img src={menu4} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 align='center' style={{fontSize: '17px'}} class="card-title">Big Sanders burger</h5>
        <p style={{marginTop: '10px'}} class="card-text fon">Original Big Sanders burger – <br /> nihoyatda katta va ishtahaochar! <br /> U ko‘p pishloq, barra sabzavotlar <br /> va sous, og‘izda eriydigan</p>
        <a style={{width: '255px'}} href="#" class="btn btn-danger"><h6  className='pa'>34 000 UZS</h6></a>
        </div>
        </div></center>
        <center><button className='btn btn-danger btr'><h6 style={{marginTop: '10px'}}>BARCHA TAKLIFLARNI KO'RISH</h6></button></center>
    </div>
  )
}

export default Menu