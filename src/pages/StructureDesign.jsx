import React from 'react'
import "../styles/landscape.css";
import Footer from '../Components/Footer';

const StructureDesign = () => {
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
                            <h1 className='section_title'>Structure Design</h1>
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
                        <p>We are your trusted partner for comprehensive structural contracting services. Our dedicated team of skilled professionals specializes in transforming architectural plans into reality with precision and expertise. Whether you’re planning a residential, commercial, or industrial project, we have the experience and capabilities to handle every aspect of the structural phase.</p>
                    </div>
                    <div className="content-middle">
                        <p>Our services encompass a wide range of structural contracting solutions, including but not limited to foundation work, concrete and steel structures, framing, roofing, and much more. We take pride in our commitment to delivering structural integrity and durability in every project we undertake.</p>
                    </div>
                    <div className="content-middle">
                        <p>What sets us apart is our unwavering dedication to quality and safety. We adhere to the highest industry standards and incorporate the latest construction technologies to ensure that your project is not only structurally sound but also built to stand the test of time.</p>
                    </div>
                    
                </div>
                <div className="right-side">
                    <div className="i1">
                        <img src='https://adamdesignstudio.com/wp-content/uploads/2023/10/04-for-correction-1-1365x2048.jpg'></img>
                    </div>
                   
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default StructureDesign;