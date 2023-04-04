import React from 'react'
import avatar from '../../imgs/avataaars.svg'
import hStyle from './Header.module.css'

export default function Header() {
  return (
    <>
        <header className='bg-color text-white' style={{paddingBlock:'125px'}}>
            <div className="d-flex justify-content-center align-items-center flex-column h-100">
                <img src={avatar} alt="" className={`${hStyle.avatarWidth} mb-5`}/>
                <h1 className={`${hStyle.Header}`}>START REACT</h1>
                <div className={`line d-flex justify-content-center align-items-center`}>
                    <div className={`hrLine`}></div>
                    <div><i className={`fa fa-star faStar`}></i></div>
                    <div className={`hrLine`}></div>
                </div>
                <p className={`${hStyle.HeaderP} mb-0`}>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </header>


    </>
  )
}

