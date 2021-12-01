import React from 'react';
import { Link } from 'react-router-dom';

const protifioItem = (props) => {
    const { title, desc, Feature, Technology, live, clientlink,serverlink,img1,_id } = props.product;
console.log(Feature);
  
    return (
        <Link to={`/Projectdetail/${_id}`} className="linkitem">
        
        <div className="row containerItem">
        <div className="col-md-7">
        <div className="work-img shadow-lg">
        
            <img src={img1} alt="" />
            
        </div>
        </div>
        <div className="col-md-5">

        <div className="work-detail">
            <h4 className="title">{title}</h4>
            <p className="desc">{desc}</p>
            <div className="feature">
                <h5>Features</h5>
                <ul className="feature-list">

                    {
                         Feature?.map((number) =>
                         <li>{number}</li>
                       )
                    }



                    
                    </ul>
                    </div>
                    <div className="technology">

                    {
                         Technology?.map((number) =>
                         <span>{number}</span>
                       )
                    }
                        
                        </div>
                        <div className="work-link">
                            <a href={live} target="_blank" rel="noreferrer">
                                Live link
                                    </a>
                                    <a href={clientlink} target="_blank" rel="noreferrer">
                                    Code link
                                        </a>
                                    <a href={serverlink} target="_blank" rel="noreferrer">
                                    Server link
                                        </a>
                                   
                                        </div>
                                        
                                        </div>
        
        </div> 
        </div>
        
        
        
        </Link>
        
            
    );
};

export default protifioItem;