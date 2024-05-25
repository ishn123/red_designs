import React from 'react'
import "../styles/landscape.css";
import Footer from '../Components/Footer';

const Landscape = () => {
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
                            <h1 className='section_title'>Landscape</h1>
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
                        <p>We are your partners in creating outdoor spaces that transcend the ordinary. We understand that your outdoor environment is an extension of your lifestyle, a place for relaxation, entertainment, and self-expression. Our team of dedicated landscape professionals is passionate about transforming your outdoor vision into captivating and functional realities.</p>
                    </div>
                    <div className="content-middle">
                        <p>Whether you seek to enhance your residential property, commercial space, or public area, we have the expertise to tailor our services to your unique needs.</p>
                    </div>
                    <div className="content-middle">
                        <p>We take pride in our commitment to excellence, sustainability, and attention to detail in every project. Whether it’s crafting an enchanting garden, creating an inviting outdoor living space, or maintaining the beauty of your landscapes, we do it all with a dedication to quality and client satisfaction.</p>
                    </div>
                </div>
                <div className="right-side">
                    <div className="i1">
                        <img src='https://adamdesignstudio.com/wp-content/uploads/2023/10/dl.beatsnoop.com-low-70fe3cf693b22352a2.jpg'></img>
                    </div>
                    <div className="i1">
                        <img src='https://adamdesignstudio.com/wp-content/uploads/2023/10/dl.beatsnoop.com-low-19d7c1defa7d6f87ae.jpg'></img>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Landscape