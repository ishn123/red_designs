import React from 'react'
import "../styles/landscape.css";
import Footer from '../Components/Footer';

const InteriorDesign = () => {
    const leftContent = [
        'Architecture',
        'Inferior desgin',
        'Inferior contracting',
        'Structural contracting',
        'Landscape',
        'Automation'
    ]
    return (
        <>
            <div className='about-image-main'>
                <div className='about-image-container'>
                    <div className="page_title">
                        <div className="row clr">
                            <h1 className='section_title'>Interior Design</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-content-wrapper">
                <div className="left-side">
                    {leftContent.map((ele)=>{
                        return (
                            <div className='text-wrapper'>
                                <h4>{ele}</h4>
                            </div>
                        )
                    })}
                </div>
                <div className="middle-side">
                    <div className="content-middle">
                        <p>Elevate your living space with our premier interior design services. At [ Adam Interiors, we’re passionate about transforming your vision into reality. Our team of experienced and creative designers works closely with you to craft personalized and stunning interiors that reflect your style and preferences. Whether you’re revamping a single room or planning a complete home makeover, we offer a comprehensive range of interior design solutions. From conceptualization and space planning to selecting the finest furnishings and finishes, we pay meticulous attention to every detail. Our commitment to quality, aesthetics, and functionality ensures that your space not only looks exquisite but also serves your practical needs. Discover the difference that professional interior design can make in enhancing your living environment.</p>
                    </div>
                    <div className="content-middle">
                        <p>We take pride in delivering not just aesthetically pleasing interiors, but spaces that align with your lifestyle and practical needs. Whether you’re rejuvenating a single room, embarking on a complete home transformation, or enhancing your office environment, our team is ready to provide the expertise and creativity to make it happen.</p>
                    </div>
                    <div className="content-middle">
                        <p>Unlock the potential of your space with Adam Interiors experience the transformative power of professional interior design and create a living or working environment that truly inspires</p>
                    </div>
                </div>
                <div className="right-side">
                    <div className="i1">
                        <img src='https://adamdesignstudio.com/wp-content/uploads/2023/11/dl.beatsnoop.com-low-fdc702298b10e0ea6b.jpg'></img>
                    </div>
                    <div className="i1">
                        <img src='https://adamdesignstudio.com/wp-content/uploads/2023/11/dl.beatsnoop.com-low-806488779430d8aa22.jpg'></img>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default InteriorDesign