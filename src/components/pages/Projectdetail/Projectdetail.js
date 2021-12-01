import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import './Projectdetail.css'
const Projectdetail = () => {
    let {Projectid} = useParams();



const[projectitem,setprojectitem]=useState([])


useEffect(() => {
    
const uri=`https://morning-basin-75450.herokuapp.com/products/${Projectid}`
fetch(uri)
.then(res=>res.json())
.then(data=>setprojectitem(data))



}, [Projectid]);



console.log(projectitem);


    return (

        <div class="container">
  <div className="rn-nav-content tab-content" id="myTabContents">
                       
                       <div className="tab-panee"
                       
                       id="education">
                           <div className="personal-experience-inner mt-4">
                               <div className="row">
                                  
                                   <div className="col-lg-6 col-md-12 col-12">
                                       <div className="content">
                                           
                                           <h4 className="maintitle">PROJECTS IMAGES</h4>
                                           <div className="experience-list">

                                             
                                               <div className="resume-single-list">
                                                   <div className="inner">
                                                       <div className="heading">
                                                           <img src={projectitem.img1} alt="" />
                                                           
                                                       </div>
                                                       
                                                   </div>
                                               </div>
                                              
                                               <div className="resume-single-list">
                                                   <div className="inner">
                                                   <div className="heading">
                                                           <img src={projectitem.img2} alt="" />
                                                           
                                                       </div>
                                                      
                                                   </div>
                                               </div>
                                               
                                               <div className="resume-single-list">
                                                   <div className="inner">
                                                   <div className="heading">
                                                           <img src={projectitem.img3} alt="" />
                                                           
                                                       </div>
                                                      
                                                   </div>
                                               </div>
                                              

                                           </div>
                                       </div>
                                   </div>
                                  
                                   <div className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                                       <div className="content">
                                           
                                           <h4 className="maintitle">PROJECTS</h4>
                                           <div className="experience-list">

                                             
                                               <div className="resume-single-list">
                                                   <div className="inner">
                                                       <div className="heading">
                                                           <div className="title">
                                                               <h4>Description</h4>
                                                               
                                                           </div>
                                                           {/* <div className="date-of-time">
                                                               <span>Expertise</span>
                                                           </div> */}
                                                       </div>
                                                       <p className="description">{projectitem.desc}</p>
                                                   </div>
                                               </div>
                                              
                                               <div className="resume-single-list">
                                                   <div className="inner">
                                                       <div className="heading">
                                                           <div className="title">
                                                               <h4>Feature</h4>
                                                              
                                                           </div>
                                                           
                                                       </div>
                                                       {
                         projectitem.Feature?.map((number) =>
                         <li>{number}</li>
                       )
                    }

                                                   </div>
                                               </div>
                                              
                                               <div className="resume-single-list">
                                                   <div className="inner">
                                                       <div className="heading">
                                                           <div className="title">
                                                               <h4>Technology</h4>
                                                               
                                                           </div>
                                                         
                                                       </div>
                                                       {
                         projectitem.Technology?.map((number) =>
                         <li>{number}</li>
                       )
                    }
                                                   </div>
                                               </div>
                                               <div className="resume-single-list">
                                                   <div className="inner">
                                                       <div className="heading">
                                                           <div className="title">
                                                               <h4>All Links</h4>
                                                               {/* <span>Works at Plugin Development (2016 -
                                                           2020)</span> */}
                                                           </div>
                                                           {/* <div className="date-of-time">
                                                               <span>5.00/5</span>
                                                           </div> */}
                                                       </div>
                                                       <div className="work-link">
                            <a href={projectitem.live} target="_blank" rel="noreferrer">
                                Live link
                                    </a>
                                    <a href={projectitem.clientlink} target="_blank" rel="noreferrer">
                                    Code link
                                        </a>
                                    <a href={projectitem.serverlink} target="_blank" rel="noreferrer">
                                    Server link
                                        </a>
                                   
                                        </div>
                                                   </div>
                                               </div>
                                               

                                           </div>
                                       </div>
                                   </div>
                                  
                               </div>
                           </div>
                       </div>
                      
                     
                    
                    
                      
                       
                   </div>
</div>
        
    );
};

export default Projectdetail;