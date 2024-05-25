import React from 'react'
import "../styles/landscape.css";
import Footer from '../Components/Footer';

const Architecture = () => {
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
                            <h1 className='section_title'>Architecture</h1>
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
                        <p>Interior design is based on architecture, which shapes a space’s physical and aesthetic structure to achieve both practical and aesthetic goals. A space’s architecture determines its layout, atmosphere, and character whether it is a public space, a business building, or a residential home.</p>
                    </div>
                    <div className="content-middle">
                        <p>The synergy between architectural design and interior design is the key to creating harmonious, functional, and visually appealing spaces.</p>
                    </div>
                    <div className="content-middle">
                        <p>In the world of interior design, understanding and respecting the architectural elements of a space is essential. This involves working with the existing layout, structural features, and spatial flow to craft designs that seamlessly integrate with the architectural framework.</p>
                    </div>
                    <div className="content-middle">
                        <p>Through close collaboration with architects and the application of architectural insights, interior designers are able to customise rooms into practical surroundings that embody the client’s vision while adhering to fundamental architectural principles. Interior design puts the finishing touches on spaces that are not only aesthetically pleasing but also incredibly practical and meaningful. Architecture sets the scene.</p>
                    </div>
                </div>
                <div className="right-side">
                    <div className="i1">
                        <img src='https://adamdesignstudio.com/wp-content/uploads/2023/10/2150695965-1.jpg'></img>
                    </div>
                    <div className="i1">
                        <img src='https://adamdesignstudio.com/wp-content/uploads/2023/10/view-beautifully-decorated-round-table-with-natural-fir-branch-candle-two-flutes-plates-against-classic-sofa-modern-apartment-1.jpg'></img>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Architecture;