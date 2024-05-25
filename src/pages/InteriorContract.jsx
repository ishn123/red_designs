import React from 'react'
import "../styles/landscape.css";
import Footer from '../Components/Footer';

const InteriorContract = () => {
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
                            <h1 className='section_title'>Interior Contract</h1>
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
                        <p>As experts in the field, we specialize in turning your interior design concepts into reality, ensuring that every detail is executed to perfection. Our dedicated team of skilled contractors and craftsmen are committed to bringing your vision to life, from the planning stage to the final finishing touches.</p>
                    </div>
                    <div className="content-middle">
                        <p>Whether it’s a residential project, a commercial space, or a hospitality establishment, we have the experience and expertise to handle it all. Our interior contracting services cover a wide spectrum, including structural modifications, electrical and plumbing work, custom carpentry, flooring and tiling, painting, and much more.</p>
                    </div>
                    <div className="content-middle">
                        <p>With our interior contracting services, you can rest assured that your space will be transformed into a functional and visually stunning environment that aligns perfectly with your vision. Experience the difference that professional contracting can make in bringing your dream interior to life.</p>
                    </div>
                </div>
                <div className="right-side">
                    <div className="i1">
                        <img src='https://adamdesignstudio.com/wp-content/uploads/2023/11/dl.beatsnoop.com-low-b0f038ea715fe16f2e.jpg'></img>
                    </div>
                    <div className="i1">
                        <img src='https://adamdesignstudio.com/wp-content/uploads/2023/10/dl.beatsnoop.com-low-6b8360940e3f3f666d.jpg'></img>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default InteriorContract