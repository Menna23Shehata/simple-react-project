import React from 'react'
import { useScrollPosition } from '../../hooks/useScrollPosition.js'
import $ from 'jquery'
// import * as bootstrap from 'bootstrap' 

export default function Navbar() {
    const scrollPosition = useScrollPosition()

    $("a[href^='#']").click(function (e) {
        // $('.collapse').show()
        $(e.target).parent().siblings().children('a').removeClass('active')
        $(e.target).addClass('active')
        // $('.collapse').hide()
    })

    if (scrollPosition == 0) {
        $('body a').removeClass('active')
    }
    // const navLinks = document.querySelectorAll('.nav-item')
    // const menuToggle = document.getElementById('navbarSupportedContent')
    // const bsCollapse = new bootstrap.Collapse(menuToggle)
    // navLinks.forEach((l) => {
    //     l.addEventListener('click', () => { bsCollapse.toggle() })
    // })

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }


    $(document).scroll(function () {
        let scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
    
    function topFunction() {
        document.documentElement.scrollTop = 0
    }

    return (
        <>
            <nav className={classNames(scrollPosition > 0 ? 'p-2 transition' : 'p-4 transition', 'navbar navbar-expand-lg bg-secondaryColor fixed-top')}>
                <div className="container">
                    <a className="navbar-brand text-white cursor-pointer" onClick={topFunction}>
                        START REACT
                    </a>
                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <small className='text-white text-uppercase fw-bold bg-color p-2 rounded-2'>menu <i className="fa fa-bars ms-2"></i></small>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase">
                            <li className="nav-item mx-0 mx-lg-1">
                                <a className="nav-link text-white py-3 px-0 px-lg-3 rounded" aria-current="page" href='#portfolio'>
                                    Portfolio
                                </a>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1">
                                <a className='nav-link text-white py-3 px-0 px-lg-3 rounded' href='#about'>
                                    About
                                </a>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1">
                                <a className='nav-link text-white py-3 px-0 px-lg-3 rounded' href='#contact'>
                                    Contact
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

            <a className="position-fixed back-to-top cursor-pointer text-white d-lg-none" style={{ display: "inline" }} onClick={topFunction}>
                <i className="fa-solid fa-arrow-up"></i>
            </a>
        </>
    )
}
