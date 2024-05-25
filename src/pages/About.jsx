import React, { useEffect } from 'react'
import "../styles/about_page.css"
import Footer from '../Components/Footer';
const About = () => {

    useEffect(() => {
        let constrain = 20;
        let mouseOverContainer = document.getElementById("ex1");
        let mouseOverContainer2 = document.getElementById("ex2");
        let ex1Layer = document.getElementById("ex1-layer");
        let ex2Layer = document.getElementById("ex2-layer");

        function transforms(x, y, el) {
            let box = el.getBoundingClientRect();
            let calcX = -(y - box.y - (box.height / 2)) / constrain;
            let calcY = (x - box.x - (box.width / 2)) / constrain;

            return "perspective(400px) "
                + "   rotateX(" + calcX + "deg) "
                + "   rotateY(" + calcY + "deg) ";
        };
        function transforms1(x, y, el) {
            let box = el.getBoundingClientRect();
            let calcX = -(y + box.y - (box.height / 2)) / constrain;
            let calcY = (x - box.x - (box.width / 2)) / constrain;

            return "perspective(400px) "
                + "   rotateX(" + calcX + "deg) "
                + "   rotateY(" + calcY + "deg) ";
        };

        function transformElement(el, xyEl) {
            el.style.transform = transforms.apply(null, xyEl);
        }
        function transformElement1(el, xyEl) {
            el.style.transform = transforms1.apply(null, xyEl);
        }
        mouseOverContainer.onmousemove = function (e) {
            let xy = [e.clientX, e.clientY];
            let position = xy.concat([ex1Layer]);

            window.requestAnimationFrame(function () {
                transformElement(ex1Layer, position);
            });
        };
        mouseOverContainer2.onmousemove = function (e) {
            let xy = [e.clientX, e.clientY];
            let position = xy.concat([ex1Layer]);

            window.requestAnimationFrame(function () {
                transformElement1(ex2Layer, position);
            });
        };
    }, [])
  return (
    <>
    <div className='about-image-main'>
         <div className='about-image-container'>
            <div className="page_title">
                <div className="row clr">
                    <h1 className='section_title'>About</h1>
                </div>
            </div>
        </div>
    </div>

    <div className="page_content">
        <div className="content_container" style={{position:"relative"}}>
            <span className='side-line'>_</span>
            <div className="content-wrapper">
                <div className="left-side">
                    <h3 style={{color:"black",fontSize:"36px", textAlign:"center", display:"inline", position:"relative",marginLeft:"auto",marginRight:"auto"}}>Get to know us</h3>
                    <div className="para-wrapper">
                        <p className='a-text'>At Adam design studio, we believe that your environment profoundly influences your well-being and productivity. Our mission is to create interior spaces that resonate with your vision, align with your lifestyle, and enhance your daily experiences. With an unwavering commitment to design excellence, we tailor our services to your unique needs, ensuring that every project we undertake reflects your personality and style.</p>
                        <p className='a-text'>Our design philosophy is rooted in the seamless integration of aesthetics and functionality. We understand that every space has a story to tell, and our goal is to translate your narrative into captivating designs. With an acute attention to detail, a flair for innovation, and a dedication to staying at the forefront of industry trends, we transform your ideas into living, breathing spaces. From conceptualization to execution, we offer a comprehensive suite of interior design services, including architectural planning, structural contracting, bespoke furnishings, lighting, and decor solutions.</p>
                        <p className='a-text'>Our team of highly skilled interior designers represents the core of our design firm, dedicated to crafting spaces that go beyond the ordinary to achieve the extraordinary. With extensive experience and a deep passion for innovation, our interior designers consistently deliver designs that exhibit exceptional quality. We take pride in turning your vision into a living reality, infusing creativity, functionality, and aesthetics into every project. From residential spaces to commercial ventures, our highly skilled interior designers are committed to setting new standards in the world of interior design, creating environments that inspire, delight, and leave a lasting impression.</p>
                    </div>
                </div>
                <div className="right-side">
                    <div className="image-frame" id="ex1">
                        <div id="ex1-layer" className="img-animation">
                            <img  src='https://adamdesignstudio.com/wp-content/uploads/2023/11/dl.beatsnoop.com-low-62cd5a2d38a75a21c0-1.jpg' height={200} width={200}></img>
                        </div>
                       
                    </div>
                </div>
            </div>
            
          
        </div>

        <div className="content_1_contaniner">
        <div className="content-wrapper">
                <div className="right-side" id="bottom-left-image">
                    <div className="image-frame" id="ex2">
                        <div id="ex2-layer" className="img-animation">
                            <img  src='https://adamdesignstudio.com/wp-content/uploads/2023/11/dl.beatsnoop.com-low-9b7adc615098263aad-1.jpg' height={150} width="100%"></img>
                        </div>
                       
                    </div>
                </div>
                <div className="left-side">
                    <h3 style={{color:"black",fontSize:"36px", textAlign:"center", display:"inline", position:"relative",marginLeft:"auto",marginRight:"auto"}}>Get to know us</h3>
                    <div className="para-wrapper">
                        <p className='a-text'>Making your place into a beauty is the mission of our talented team of interior designers. Our designers use their extensive experience and meticulous attention to detail to produce spaces that are both aesthetically beautiful and practical. To make sure that the finished design captures each client's distinct style, they collaborate closely with them to fully grasp their preferences and needs.</p>
                        <p className='a-text'>Our exceptional interior designers can realize any vision, whether it be modern or vintage, and create a genuinely spectacular home for you.</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>

    
    </>
   
  )
}

export default About