import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Resume.css"
const Resume = () => {

const [toggle,setToggle]=useState(1)

    const toggleTab=(index)=>{
        setToggle(index);
    }
    return (
        <div className="container my-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle">7+ Years of Experience</span>
                            <h2 className="title">My Resume</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--45">
                    <div className="col-lg-12">
                        <ul className="rn-nav-list nav nav-tabs mb-5" id="myTabs" role="tablist">
                            <li className={toggle===1?"nav-item active":"nav-item"}
                            
                            
                            onClick={()=>toggleTab(1)}
                            
                            >
                                <Link to="#" className="nav-link">education</Link>
                            </li>
                           
                            <li className={toggle===2?"nav-item active":"nav-item"}
                            
                            
                            onClick={()=>toggleTab(2)}
                            
                           >
                                <Link to="#" className="nav-link ">Work experience</Link>
                            </li>
                             {/* <li className={toggle===3?"nav-item active":"nav-item"}
                            
                            
                            onClick={()=>toggleTab(3)}
                            
                           >
                                <Link to="#" className="nav-link ">interview</Link>
                            </li>  */}
                        </ul>
                        
                        <div className="rn-nav-content tab-content" id="myTabContents">
                       
                            <div className={toggle===1?"tab-pane active":"tab-pane"}
                            
                            id="education">
                                <div className="personal-experience-inner mt--40">
                                    <div className="row">
                                       
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="content">
                                                <span className="subtitle">2014 - 2021</span>
                                                <h4 className="maintitle">Education Quality</h4>
                                                <div className="experience-list">

                                                  
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>BBA in Management</h4>
                                                                    <span>National University (Present)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>coming/5</span>
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                   
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4> HSC in Science</h4>
                                                                    <span>Bonpara Degree College (2016)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>3.92/5</span>
                                                                </div>
                                                            </div>
                                                           
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>SSC in Science</h4>
                                                                    <span>Bonpara Model High School (2014)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>5/5</span>
                                                                </div>
                                                            </div>
                                                           
                                                        </div>
                                                    </div>
                                                   

                                                </div>
                                            </div>
                                        </div>
                                       
                                        <div className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                                            <div className="content">
                                                <span className="subtitle">2020 - 2021</span>
                                                <h4 className="maintitle">My Skill</h4>
                                                <div className="experience-list">

                                                  
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Expertise</h4>
                                                                    
                                                                </div>
                                                                {/* <div className="date-of-time">
                                                                    <span>Expertise</span>
                                                                </div> */}
                                                            </div>
                                                            <p className="description">HTML, CSS, Bootstrap, React Bootstrap</p>
                                                        </div>
                                                    </div>
                                                   
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Comfortable</h4>
                                                                    {/* <span>Job at Rainbow-Themes (2008 - 2016)</span> */}
                                                                </div>
                                                                {/* <div className="date-of-time">
                                                                    <span>4.95/5</span>
                                                                </div> */}
                                                            </div>
                                                            <p className="description">JavaScript, ES6, React JS, React Router, Redux, Thunk, React Toolkit,Material, Tailwind CSS, jQuery, WordPress</p>
                                                        </div>
                                                    </div>
                                                   
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Familiar</h4>
                                                                    {/* <span>Works at Plugin Development (2016 -
                                                                2020)</span> */}
                                                                </div>
                                                                {/* <div className="date-of-time">
                                                                    <span>5.00/5</span>
                                                                </div> */}
                                                            </div>
                                                            <p className="description">Node JS, Express JS, MongoDB, Axios, Adobe Photoshop, Adobe XD</p>
                                                        </div>
                                                    </div>
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Tools</h4>
                                                                    {/* <span>Works at Plugin Development (2016 -
                                                                2020)</span> */}
                                                                </div>
                                                                {/* <div className="date-of-time">
                                                                    <span>5.00/5</span>
                                                                </div> */}
                                                            </div>
                                                            <p className="description"> Git, Firebase, Webpack, Heroku, Netlify, VS Code, Chrome Dev Tools, Postman
</p>
                                                        </div>
                                                    </div>
                                                    

                                                </div>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                           
                          
                            <div className={toggle===2?"tab-pane active":"tab-pane"} id="experience" >
                                <div className="personal-experience-inner mt--40">
                                    <div className="row">
                                        
                                        <div className="col-lg-6 col-md-12 col-12 ">
                                            <div className="content">
                                                <span className="subtitle">2020 - 2020</span>
                                                <h4 className="maintitle">My Project</h4>
                                                <div className="experience-list">

                                                    
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Web Designer at A local team</h4>
                                                                    {/* <span>University of DVI (1997 - 2001)</span> */}
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span><Link to="https://sanjuhassan79.github.io/monihosanju/">Live Link</Link></span>
                                                                </div>
                                                            </div>
                                                            <p className="description">: PSD to HTML conversion, XD to HTML conversion, Figma to HTMLconve</p>
                                                        </div>
                                                    </div>
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Niche Product Website</h4>
                                                                    {/* <span>University of DVI (1997 - 2001)</span> */}
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span><Link to="https://nellie-850bb.web.app/">Live Link</Link></span>
                                                                </div>
                                                            </div>
                                                            <p className="description">A single product category selling website. It is fully responsive for all devices. <br />

                                                            <span className="cat-Item"> Key Feature:</span> Check Out, Payment with Stripe, Product adding, Purchase Product,
                                                            Productdelete, Rating added, admin panel, user dashboard, login and registration <br />

                                                            <span className="cat-Item">Technology Used:</span> React JS, React Router, Node JS, Express JS, MongoDB, React
                                                            BoFirebase Authentication</p>
                                                        </div>
                                                    </div>
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Tourism Management Website</h4>
                                                                    {/* <span>University of DVI (1997 - 2001)</span> */}
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span><Link to="https://nellie-850bb.web.app/">Live Link</Link></span>
                                                                </div>
                                                            </div>
                                                            <p className="description">A Tourism application where users can Be able to book various services in the tourist area. A
dashboard is added for maintenance and it is fully responsive for all devices.
 <br />

                                                            <span className="cat-Item"> Key Feature:</span> Check Out, Tourism management, order history<br />

                                                            <span className="cat-Item">Technology Used:</span> React JS, React Router, Node JS, Express JS, MongoDB, React
BoFirebase Authentication
</p>
                                                        </div>
                                                    </div>
                                                    
                                                   
                                                    

                                                </div>
                                            </div>
                                        </div>
                                    
                                        <div className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                                            <div className="content">
                                                <span className="subtitle">2020 - 2021</span>
                                                <h4 className="maintitle">My Project</h4>
                                                <div className="experience-list">

                                                    
                                                <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Healthcare-related Website</h4>
                                                                    {/* <span>University of DVI (1997 - 2001)</span> */}
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span><Link to="https://medical-3aac5.web.app/">Live Link</Link></span>
                                                                </div>
                                                            </div>
                                                            <p className="description">A single-page application for a clinic where a patient can make an appointment with a doctor.It is fully responsive for all devices <br />

                                                            <span className="cat-Item"> Key Feature:</span> Appointment with date and time, Appointment management, Doctor ManagemenT technology <br />

                                                            <span className="cat-Item">Technology Used:</span> React JS, React Router, React BoFirebase Authentication</p>
                                                        </div>
                                                    </div>
                                                <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Admin Dashboard HTML</h4>
                                                                    {/* <span>University of DVI (1997 - 2001)</span> */}
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span><Link to="https://sanjuhassan79.github.io/dashboard-html-css/">Live Link</Link></span>
                                                                </div>
                                                            </div>
                                                            <p className="description">An interactive dashboard for admin management. Where admin can take various actions. <br />


                                                            <span className="cat-Item">Technology Used:</span> HTML, CSS, Bootstrap
</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                         
                            {/* <div className={toggle===3?"tab-pane active":"tab-pane"} id="interview">
                                <div className="personal-experience-inner mt--40">
                                    <div className="row">
                                     
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="content">
                                                <span className="subtitle">2007 - 2010</span>
                                                <h4 className="maintitle">Company Experience3</h4>
                                                <div className="experience-list">

                                                   
                                                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true" className="resume-single-list aos-init aos-animate">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Personal Portfolio April Fools</h4>
                                                                    <span>University of DVI (1997 - 2001)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>4.30/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">The education should be very
                                                                interactual. Ut tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                  
                                                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" className="resume-single-list aos-init aos-animate">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4> Examples Of Personal Portfolio</h4>
                                                                    <span>College of Studies (2000 - 2002)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>4.50/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">Maecenas finibus nec sem ut
                                                                imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                   
                                                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="700" data-aos-once="true" className="resume-single-list aos-init aos-animate">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Tips For Personal Portfolio</h4>
                                                                    <span>University of Studies (1997 - 2001)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>4.80/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description"> If you are going to use a passage.
                                                                Ut tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                  

                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                                            <div className="content">
                                                <span className="subtitle">2007 - 2010</span>
                                                <h4 className="maintitle">Job Experience</h4>
                                                <div className="experience-list">

                                                    
                                                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" className="resume-single-list aos-init aos-animate">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Diploma in Web Development</h4>
                                                                    <span>BSE In CSE (2004 - 2008)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>4.70/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">Contrary to popular belief. Ut
                                                                tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                   
                                                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="700" data-aos-once="true" className="resume-single-list aos-init aos-animate">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>The Personal Portfolio Mystery</h4>
                                                                    <span>Job at Rainbow-Themes (2008 - 2016)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>4.95/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">Generate Lorem Ipsum which looks. Ut
                                                                tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                   
                                                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="900" data-aos-once="true" className="resume-single-list aos-init aos-animate">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Diploma in Computer Science</h4>
                                                                    <span>Works at Plugin Development (2016 -
                                                                2020)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>5.00/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">Maecenas finibus nec sem ut
                                                                imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                   

                                                </div>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div> */}
                            
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Resume;