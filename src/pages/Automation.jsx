import React from 'react'
import "../styles/landscape.css";
import Footer from '../Components/Footer';

const Automation = () => {
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
                            <h1 className='section_title'>Automation</h1>
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
                        <p>Automation has become a transformational force in interior design, changing the way we experience and interact with our living and work environments. Interior designers are able to incorporate creative solutions that improve efficiency, comfort, and convenience through the use of smart technologies and automation systems. Automation of lighting, temperature control, security, and entertainment systems is just one example of how these innovations enable customers to design personalized spaces that meet their unique requirements and tastes.</p>
                    </div>
                    <div className="content-middle">
                        <p>The synergy between interior design and automation is a testament to the power of technology in crafting exceptional living and working environments. Interior designers who specialize in automation are well-versed in selecting and implementing cutting-edge systems that seamlessly blend with the overall design concept. They offer clients the ability to transform their spaces into intelligent, responsive, and energy-efficient sanctuaries where design aesthetics and innovative technology harmoniously coexist, creating a more comfortable and connected lifestyle.</p>
                    </div>
                </div>
                <div className="right-side">
                    <div className="i1">
                        <img src='https://adamdesignstudio.com/wp-content/uploads/2023/11/dl.beatsnoop.com-low-113e4932ad7f4a8d7d.jpg'></img>
                    </div>
                    <div className="i1">
                        <img src='https://adamdesignstudio.com/wp-content/uploads/2023/11/3d-rendering-modern-dining-room-living-room-with-luxury-decor-1.jpg'></img>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Automation