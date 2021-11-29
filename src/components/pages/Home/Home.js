import React from 'react';
import { Link } from 'react-router-dom';
import resume from './Sanju hassan Resume-pdf.pdf'
import './Home.css'
import Skill from '../Skill/Skill';
import Portfolio from '../Portfolio/Portfolio';
const Home = () => {
    return (
      <>
        <div class="container mt-5">
  <div class="row">
    <div class=" col-12 col-md-8">
      <div className="desc__Item">
          <h6 className="subtitle">WELCOME TO MY WORLD</h6>
          <h1 className="title">Hi, I’m <span className="title1">Sanju hassan</span></h1>
          <h1 className="title">a Professional Developer.</h1>
          <p className="description">.I'm a Front End Developer based in Bangladesh. I describe myself as a passionate developer who loves coding, open-source, and the web platform.</p>

          <p className="description">
Aside from my job, I like to create and contribute to open-source projects. That helps me to learn a ton of new stuff, grow as a developer, and support other open-source projects. Also, I enjoy writing technical things on my blog.</p>

<p className="description">
In my free time,   at the beach, or on tech meetups and conferences around Bangladesh</p>


<Link to={resume} download="Sanju hassan Resume-pdf.pdf" target="_blank"><button type="button" class="btn btn-outline-danger mt-4">Download CV</button></Link>




<div class="social-share-inner-left">
           <span class="title">find with me</span>
                 <ul class="social-share d-flex liststyle">
                     <li class="facebook"><Link to="#">
                         
                     <i class="fab fa-facebook-f"></i>
                         
                         
                         </Link>
                     </li>
                     <li class="facebook"><Link to="#">
                         
                     <i class="fab fa-linkedin-in"></i>
                         
                         
                         </Link>
                     </li>
                     <li class="facebook"><Link to="#">
                         
                     <i class="fab fa-github"></i>
                         
                         
                         </Link>
                     </li>
                     
                  </ul>
 </div>










      </div>
    </div>
    <div class="col-12 col-md-4">
      <div className="img__bd">
          <img src="https://i.ibb.co/h2xMD1b/sanjuimg.png" className="personel__img" alt="sanju" />
      </div>
    </div>
    
  </div>
  <hr />
</div>


<Skill></Skill>
<Portfolio></Portfolio>
      </>
    );
};

export default Home;