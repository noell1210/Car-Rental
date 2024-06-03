import React from 'react'
import OurServiceLogo from "../../assets/imgservice.png"
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const OurService = () => {
  return (
    <div className='ourservice-container'>
        <div className='ourservice'>
            <div className='ourservice-logo'>
                <img src={OurServiceLogo}alt="" />
            </div>
            <div className='ourservice-content'>
                <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
                <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                <div className='ourservice-text'>
                  <p><FontAwesomeIcon icon={faCheck} className='checkicon'/>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                  <p><FontAwesomeIcon icon={faCheck} className='checkicon'/>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                  <p><FontAwesomeIcon icon={faCheck} className='checkicon'/>Sewa Mobil Jangka Panjang Bulanan</p>
                  <p><FontAwesomeIcon icon={faCheck} className='checkicon'/>Gratis Antar - Jemput Mobil di Bandara</p>
                  <p><FontAwesomeIcon icon={faCheck} className='checkicon'/>Layanan Airport Transfer / Drop In Out</p>
                </div>
            </div>
        </div>
    </div>
    
    
  )
}

export default OurService