import React from 'react'
import aStyle from './About.module.css'
import ScrollSpy from "react-ui-scrollspy";

export default function About() {
    return (
    <>
    {/* <ScrollSpy> */}
        <section className={`pageSection text-white bg-color`} id='about'>
            <div className="container text-center">
                <h2 className={`sectionHeading`}>ABOUT</h2>
                
                <div className={`d-flex justify-content-center align-items-center line`}>
                    <div className={`hrLine`}></div>
                    <div><i className={`fa fa-star faStar`}></i></div>
                    <div className={`hrLine`}></div>
                </div>

                <div className="row text-start">
                    <div className="col-md-6" style={{paddingInline: '90px'}}>
                        <p className={`${aStyle.parag} lead`}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-md-6" style={{paddingInline: '90px'}}>
                        <p className={`${aStyle.parag} lead`}>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                    </div>
                </div>
            </div>
        </section>
    {/* </ScrollSpy> */}
    </>
    )
}
