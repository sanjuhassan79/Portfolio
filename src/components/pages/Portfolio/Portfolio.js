import React, { useState,useEffect } from 'react';
import './Portfolio.css'
import ProtifioItem from './ProtifioItem';

const Portfolio = () => {


const [item,setItem]=useState([])


useEffect(() => {
  
fetch('https://morning-basin-75450.herokuapp.com/products')
.then(res=>res.json())
.then(data=>setItem(data))





}, []);

 console.log(item);

    return (
        <div className="container ">
        <div className="row containerItem">
          <div className="col">
              <h5 className="subtitle__skill">PORTFOLIO</h5>
              <h2 className="title__Skill">Some Of My Featured Projects</h2>
          <div className="Portfolio__section">
        
  

                  
      
       
       </div>
          </div>
          
        </div>




        <>


        {
                        item.map(product => <ProtifioItem
                            key={product.key}
                            product={product}
                           
                        >
                        </ProtifioItem>)
                    }
        
   




      </>

      </div>
    );
};

export default Portfolio;