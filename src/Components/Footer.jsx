import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "../styles/footer.css"
const Footer = () => {
    return (
        <div style={{height:"100%"}}>
            <div className="main-footer-wrapper">
            <div className="footer-wrapper">
                <div className="logo-icon-wrapper">
                    <div className="image-logo-wrapper">
                        <img src='https://adamdesignstudio.com/wp-content/uploads/2023/10/ADS-LOGO-150x150-2.png' style={{ backgroundColor: "black" }} width={200} height={200}></img>
                    </div>
                    <div className="icons-wrapper">
                        <div className="mini-icon-wrapper">
                            <FacebookIcon sx={{ color: "white" }} className='icon-share'></FacebookIcon>
                        </div>
                        <div className="mini-icon-wrapper">
                            <InstagramIcon sx={{ color: "white" }} className='icon-share'></InstagramIcon>
                        </div>
                        <div className="mini-icon-wrapper">
                            <YouTubeIcon sx={{ color: "white" }} className='icon-share'></YouTubeIcon>
                        </div>
                        <div className="mini-icon-wrapper">
                            <TwitterIcon sx={{ color: "white" }} className='icon-share'></TwitterIcon>
                        </div>
                        <div className="mini-icon-wrapper">
                            <EmailIcon sx={{ color: "white" }} className='icon-share'></EmailIcon>
                        </div>
                    </div>
                </div>

                <div className="address-wrapper">
                <div className="map-icon">
                    <LocationOnIcon sx={{ color: "black" }}></LocationOnIcon>
                </div>
                <div className="address-detail">
                    <span id="footer-address-text">2nd Floor, Vismaya Building,4th Cross Rd,Ramaswamy colony, Panampilly Nagar,Kochi ,Ernakulam,Kerala,682016</span>
                </div>
            </div>
            </div>
            
        </div>
        </div>
        

    )
}

export default Footer