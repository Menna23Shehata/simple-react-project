import React from 'react'
import cStyle from './Contact.module.css' 
// import { useFormik } from 'formik'
// import * as Yup from 'yup'
// import ScrollSpy from "react-ui-scrollspy";
import $ from 'jquery'

export default function Contact() {

//   let userName = document.getElementById('name')
//   var nameAlert = document.getElementById('name-alert')
//   let flag = false

//   function nameValidation(){
//     if(userName.value !== ''){
//       if(/^[A-Z]/.test(userName.value) == true){
//         if (/[a-z]{3,10}$/.test(userName.value) == true) {
//           nameAlert.classList.add('d-none')
//           flag = true
//         }
//         else {
//           nameAlert.innerHTML = `<p class="fw-bold text-start m-0 text-danger">the capital letter should be followed with 3 to 10 small letters</p>`
//           nameNotValid()
//       }
//       }else {
//         nameAlert.innerHTML = `<p class="fw-bold text-start m-0 text-danger">the input must start with a capital letter</p>`
//         nameNotValid()
//     }
//     }else {
//       nameAlert.innerHTML = `<p class="fw-bold text-start m-0 text-danger">please enter your name</p>`
//       nameNotValid()
//   }
//   }

//   function nameNotValid() {
//     nameAlert.classList.remove('d-none')
//     flag = false
// }

    

  return (
    <>
    {/* <ScrollSpy> */}
    <section className='pageSection' id='contact'>
      <div className="container">
      <h2 className='sectionHeading text-center secondaryColor'>CONTACT</h2>
            <div className={`line d-flex justify-content-center align-items-center secondaryColor`}>
                <div className={`hrLine`}></div>
                <div><i className={`fa fa-star faStar`}></i></div>
                <div className={`hrLine`}></div>
            </div>
        <div className="center position-relative">
          <form className='w-75 mx-auto'>
          
            <div className="inputbox mb-5">
              <input type="text" required="required" placeholder='Name' name='name' id='name' autoComplete='off'/>
              <span>Name</span>
            </div>
              {/* <p className="alert d-none text-capitalize py-1 m-0" id="name-alert"></p> */}

            <div className="inputbox mb-5">
              <input type="email" required="required" placeholder='Email Address' name='email' id='email' autoComplete='off'/>
              <span>Email</span>
            </div>
            
            <div className="inputbox mb-5">
              <input type="number" required="required" placeholder='Phone Number' name='phone' id='phone'autoComplete='off'/>
              <span>Phone</span>
            </div>
            
            <div className="inputbox mb-5">
            <textarea rows="3" placeholder='Message' name='message' id='message' required="required">
            </textarea>
              <span>Message</span>
            </div>
          
            <div className="inputbox">
              <button className={` btn text-capitalize text-white cursor-pointer fs-4`}>Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>

    {/* </ScrollSpy> */}
    </>
  )
}
