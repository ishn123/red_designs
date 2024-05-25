import React, { useEffect } from 'react'
import "../styles/about_page.css"
import Footer from '../Components/Footer';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import "../styles/contact.css"
import GoogleMapReact from 'google-map-react';
import { FormControl, FormGroup, TextField } from '@mui/material';
const Contact = () => {
    
    const handleSubmit = (e)=>{
        e.preventDefault();

    }

    return (
        <>
            <div className='about-image-main'>
                <div className='about-image-container'>
                    <div className="page_title">
                        <div className="row clr">
                            <h1 className='section_title'>Contact</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page_content">
                <div className="content_container" style={{ position: "relative" }}>
                    <div className="content-wrapper">
                        <div className="right-side">
                            <div className="image-frame" id="ex1">
                                <div id="ex1-layer" className="img-animation">
                                    <img src='https://adamdesignstudio.com/wp-content/uploads/2024/02/2151038889-_1_.webp' height={200} width={300}></img>
                                </div>

                            </div>
                        </div>
                        <div className="left-side">
                            <h3 style={{ color: "black", fontSize: "36px", textAlign: "center", display: "inline", position: "relative", marginLeft: "auto", marginRight: "auto" }}>Get to know us</h3>
                            <div className="para-wrapper">
                                <p className='a-text'>Don't hesitate to contact us for any questions or assistance you need. We're here to help and provide the information you seek. Your satisfaction is our priority, and we're ready to assist you. Reach out to us today, and let's get started on a together.Whether you have specific inquiries, require detailed assistance, or simply seek guidance on our services, our doors are always open. We understand the importance of clear communication, and our team is poised to provide tailored solutions to meet your needs.</p>

                            </div>
                        </div>

                    </div>


                </div>
                <div className="contact-options-wrapper">
                    <div className="main-contact-wrapper">
                        <div className="icon-side">
                            <EmailIcon></EmailIcon>
                        </div>
                        <div className="contact-type-wrapper">
                            <div className="contact-type-name">
                                <h3>Email</h3>
                            </div>
                            <div className="sub-contact-type-name">
                                <span>info@adamdesignstudio</span>
                            </div>
                        </div>
                    </div>
                    <div className="main-contact-wrapper">
                        <div className="icon-side">
                            <CallIcon></CallIcon>
                        </div>
                        <div className="contact-type-wrapper">
                            <div className="contact-type-name">
                                <h3>Phone</h3>
                            </div>
                            <div className="sub-contact-type-name">
                                <span>+9170237389282</span>
                            </div>
                        </div>
                    </div>
                    <div className="main-contact-wrapper">
                        <div className="icon-side">
                            <LocationOnIcon></LocationOnIcon>
                        </div>
                        <div className="contact-type-wrapper">
                            <div className="contact-type-name">
                                <h3>Address</h3>
                            </div>
                            <div className="sub-contact-type-name">
                                <span>
                                    Address
                                    2nd Floor, Vismaya Building, 4th Cross Rd, Ramaswamy colony, Panampilly Nagar, Kochi, Ernakulam, Kerala 682016</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="form-location-wrapper">
                    <div className="form-wrapper">
                        <div className="text-desc">
                            <h3>Send your messages via below form</h3>
                        </div>
                        <div className="main-form">
                            <form className='form-contact' onSubmit={(e)=>handleSubmit(e)}>
                                <div className="inp-wrapper">
                                    <input type='text' placeholder='Your name (*)'  required/>
                                    <input type='email' placeholder='Your email (*)' required/>
                                </div>
                                <div className="inp-wrapper">
                                    <input type='text' placeholder='Your subject (*)'required />
                                    <input type='text' placeholder='Your phone no (*)' required/>
                                </div>
                                <div className="select-wrapper" style={{textAlign:"center"}}>
                                    <select style={{width:"85%",padding:"10px"}}>
                                        <option selected>Business Department</option>
                                        <option>Personal Department</option>
                                        <option>Support Department</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                                <div className="text-area-wrapper" style={{textAlign:"center",height:"30%"}}>
                                    <textarea placeholder='your messages' style={{width:"85%",height:"100%"}}></textarea>
                                </div>
                                <div className="submit-button-wrapper">
                                    <button style={{padding:"10px",marginLeft:"calc(10% - 15px)"}}>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="google-map-wrapper">
                        <div style={{width: "100%"}}><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=ADAM%20DESIGN%20STUDIO%20LLP.%202nd%20Floor,%20Vismaya%20Building,%204th%20Cross%20Rd,%20Ramaswamy%20colony,%20Panampilly%20Nagar,%20Kochi,%20Ernakulam,%20Kerala%20682016+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe></div>
                    </div>
                </div>
                <Footer></Footer>
            </div>


        </>

    )
}

export default Contact