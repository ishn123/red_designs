import React, { useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "../styles/customcontact.css";
const CustomContactForm = () => {
    function registerAnimation(){
        let ele = document.getElementsByClassName('main-one-wrapper')[0]
        ele.classList.add('animate-down');
    }
    const handleClose = (e) =>{
        let ele = document.getElementsByClassName('main-one-wrapper')[0]
        ele.classList.remove('animate-down');
    }
    useEffect(() => {
        setTimeout(()=>{
            registerAnimation();
        },1000)
    }, [])
    return (
        <div className="main-one-wrapper">
            <div className='main-form-wrapper'>
            <div className="heading">
                <div className="combine-l-r">
                    <div className="left-head">
                        <h4>ENQUIRE FOR MORE: </h4>
                    </div>
                    <div className="right-head">
                        <h5>DESGINS THAT BRINGS DREAM TO YOUR LIFE</h5>
                    </div>
                </div>

                <div className="cross-icon" onClick={(e)=>handleClose(e)}>
                    <CloseIcon></CloseIcon>
                </div>

            </div>
            <div className="form-part">
                <div className="text-free">
                    <h1 style={{color:"black",margin:"0"}}>FREE ESTIMATE</h1>
                </div>
                <div className="main-part">
                    <form className='custom-contact-form'>
                        <div className="names-wrapper">
                            <div className="left-fname-wrapper">
                                <label for="firstName">First Name</label>
                                <input type='text' placeholder='Xpeed'></input>
                                <span className='help-text'>Enter your first Name</span>
                            </div>
                            <div className="right-lname-wrapper">
                                <label for="lastName">Last Name</label>
                                <input type='text' placeholder='Studio'></input>
                                <span className='help-text'>Enter your last Name</span>
                            </div>
                            
                        </div>
                        <div className="email-wrapper">
                            <label>Email Address</label>
                            <input type='email' placeholder='Add email'></input>
                            <span className='help-text'>Example: user@website.com</span>
                        </div>
                        <div className="telephone-wrapper">
                            <label>Telephone</label>
                            <input type='email' placeholder='+917336363663'></input>
                        </div>
                        <div className="comments-wrapper">
                            <label>Comments / Questions</label>
                            <textarea placeholder='Add text'></textarea>
                        </div>
                        <div className="button-wrapper">
                            <button>GET A QUOTE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default CustomContactForm