import React, { useState } from 'react'
import images from '../../imgs/imgs.js'
import pStyle from './Portfolio.module.css'
import $ from "jquery"
// import ScrollSpy from 'react-ui-scrollspy'

export default function Portfolio() {

    const imgsCol = Array.from(document.querySelectorAll(`#portfolio .col-md-4 .imgColumn`))
    const imgs = Array.from(document.querySelectorAll(`#portfolio .col-md-4 .imgColumn img`))
    let innerImg = document.getElementById('innerImg')
    const imgHoverDiv = Array.from(document.querySelectorAll(`#portfolio .col-md-4 .imgColumn .imgHoverDiv`))
    
    const [header, setheader] = useState('')
    
    for (let i = 0; i < imgsCol.length; i++) {
        for(let i =0; i<imgs.length; i++){
            for (let i = 0; i < imgHoverDiv.length; i++) {
                imgHoverDiv[i].addEventListener('click', function () {
                    let imgSrc = imgs[i].getAttribute('src')
                    innerImg.setAttribute('src' , imgSrc)
                    
                    let imgName = imgs[i].getAttribute('alt')
                    setheader(imgName)
                })
                
            }
        }
    }


    function openBox(){
        $(".box").removeClass('d-none')
        $(".box").addClass('d-block')
        document.body.style.overflow = 'hidden'
    }

    function closeBox() {
        $(".box").addClass('d-none')
        document.body.style.overflow = 'visible'
    }

    document.addEventListener('keyup', function (e) {
        if(e.key == 'Escape'){
            closeBox()
        } 
    })


    return (
    <>
    {/* <ScrollSpy> */}
    <section className='pageSection secondaryColor' id='portfolio'>
        <div className="container text-center">
            <h2 className='sectionHeading'>PORTFOLIO</h2>
            <div className={`line d-flex justify-content-center align-items-center`}>
                <div className={`hrLine`}></div>
                <div><i className={`fa fa-star faStar`}></i></div>
                <div className={`hrLine`}></div>
            </div>

            <div className="row g-4">
                <div className='col-md-4 cursor-pointer'>
                    <div className='overflow-hidden position-relative imgColumn'>
                        <img src={images.cabin} alt="log cabin" className='w-100 rounded-2'/>
                        <div className={`${pStyle.portfolioItemCaption} d-flex align-items-center justify-content-center h-100 w-100 rounded-2 imgHoverDiv`}  onClick={openBox}>
                            <i className='fa fa-plus text-center text-white'></i>
                        </div>
                    </div>
                </div>
                
                <div className='col-md-4 cursor-pointer'>
                    <div className='overflow-hidden position-relative imgColumn'>
                        <img src={images.cake} alt="tasty cake" className='w-100 rounded-2'/>
                        <div className={`${pStyle.portfolioItemCaption} d-flex align-items-center justify-content-center h-100 w-100 rounded-2 imgHoverDiv`} onClick={openBox}>
                            <i className='fa fa-plus text-center text-white'></i>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 cursor-pointer'>
                    <div className='overflow-hidden position-relative imgColumn'>
                        <img src={images.circus} alt="circus tent" className='w-100 rounded-2'/>
                        <div className={`${pStyle.portfolioItemCaption} d-flex align-items-center justify-content-center h-100 w-100 rounded-2 imgHoverDiv`} onClick={openBox}>
                            <i className='fa fa-plus text-center text-white'></i>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 cursor-pointer'>
                    <div className='overflow-hidden position-relative imgColumn'>
                        <img src={images.game} alt="controller" className='w-100 rounded-2'/>
                        <div className={`${pStyle.portfolioItemCaption} d-flex align-items-center justify-content-center h-100 w-100 rounded-2 imgHoverDiv`} onClick={openBox}>
                            <i className='fa fa-plus text-center text-white'></i>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 cursor-pointer'>
                    <div className='overflow-hidden position-relative imgColumn'>
                        <img src={images.safe} alt="locked safe" className='w-100 rounded-2'/>
                        <div className={`${pStyle.portfolioItemCaption} d-flex align-items-center justify-content-center h-100 w-100 rounded-2 imgHoverDiv`} onClick={openBox}>
                            <i className='fa fa-plus text-center text-white'></i>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 cursor-pointer'>
                    <div className='overflow-hidden position-relative imgColumn'>
                        <img src={images.submarine} alt="submarine" className='w-100 rounded-2'/>
                        <div className={`${pStyle.portfolioItemCaption} d-flex align-items-center justify-content-center h-100 w-100 rounded-2 imgHoverDiv`} onClick={openBox}>
                            <i className='fa fa-plus text-center text-white'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* </ScrollSpy> */}

    <section className={`vh-100 position-fixed top-0 start-0 w-100 p-4 ${pStyle.bgBox} box d-none`} onClick={closeBox}>
        <div className="container">
            <div className="position-relative">
                <i className={`fa fa-close fa-3x position-absolute cursor-pointer ${pStyle.closeIcon} close`} onClick={closeBox}></i>
            </div>
            
            <div className={`row bg-white rounded-4 ${pStyle.boxBody}`}>
                <h2 className='sectionHeading text-center text-uppercase secondaryColor'>{header}</h2>

                <div className={`line d-flex justify-content-center align-items-center secondaryColor`} style={
                    {margin: '1.25rem 0 1.5rem'}
                }>
                    <div className={`hrLine`}></div>
                    <div><i className={`fa fa-star faStar`}></i></div>
                    <div className={`hrLine`}></div>
                </div>
                
                <div className="col-md-8 p-5 text-center mx-auto">
                    <img src={images.cake} alt="" className='rounded-4 img-fluid mb-5' id='innerImg'/>
                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum illo quidem non magni ipsam nemo voluptatem, facilis ullam unde nisi voluptate! Quod dignissimos cum vel, ipsam laudantium nemo voluptas voluptatem.</p>
                    <button className={`btn text-capitalize text-white cursor-pointer`} onClick={closeBox}><i className='fa fa-close pe-2'></i>close window</button>
                    
                </div>
            </div>
        </div>
    </section>
    </>
    )
}
