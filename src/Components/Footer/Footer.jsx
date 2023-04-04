import React from 'react'
import fStyle from './Footer.module.css'

export default function Footer() {
    return (
        <>
            <footer className={`text-white ${fStyle.fbg} text-center`}>
                <div className={`container ${fStyle.footer}`}>
                    <div className="row">
                        <div className="col-md-4">
                            <h4 className={`text-uppercase mb-4 ${fStyle.h4Style}`}>Location</h4>
                            <p className={`lead ${fStyle.pStyle}`}>
                                2215 John Daniel Drive
                                <br/>
                                Clark, MO 65243
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h4 className={`text-uppercase mb-4 ${fStyle.h4Style}`}>AROUND THE WEB</h4>
                            <ul className='list-unstyled d-flex justify-content-center align-items-center'>
                                <li><i className='fa-brands fa-facebook-f mx-1 border-2 rounded-circle border d-flex justify-content-center align-items-center'></i></li>
                                <li><i className='fa-brands fa-twitter mx-1 border-2 rounded-circle border d-flex justify-content-center align-items-center'></i></li>
                                <li><i className='fa-brands fa-linkedin-in mx-1 border-2 rounded-circle border d-flex justify-content-center align-items-center'></i></li>
                                <li><i className="bi bi-dribbble mx-1 border-2 rounded-circle border d-flex justify-content-center align-items-center"></i></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4 className={`text-uppercase mb-4 ${fStyle.h4Style}`}>About Freelancer</h4>
                            <p className={`lead ${fStyle.pStyle}`}>
                                Freelance is a free to use, MIT licensed Bootstrap theme created by Route
                            </p>
                    </div>
                    </div>
                </div>
            
                <div className={`${fStyle.copyright} p-3`}>Copyright © Your Website 2021</div>
            </footer>
        </>
    )
}
