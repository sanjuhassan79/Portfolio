import React from 'react';
import { Col, Form, Row,Button } from 'react-bootstrap';
import './Contact.css'
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
const Contact = () => {
  
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2fnhhnj', 'template_lpnskts', e.target, 'user_exQwp9HHVNzkZuiMy1oh5')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };





    return (
        <div>
        <div className="page-breadcrumb">
            <h1 className="page-title">Contact</h1>
        </div>


        





        
    <div className="my-5 py-5">
        <div className="container">

            <div className="row">
                
                <div className="col-md-5">
                <div className="single-info-box">

<div className="icon-box"><i className="fas fa-envelope envelopeItem"></i></div>
<div className="inner-box">
<h3>Email</h3>
<p>sanjuhassan916@gmail.com</p>
</div>
 </div>
 <div className="single-info-box">

                            <div className="icon-box"><i className="fas fa-mobile-alt envelopeItem"></i></div>
                            <div className="inner-box">
                            <h3>Phone</h3>
                            <p>+8801791324733</p>
                            </div>
                             </div>
                             <div className="single-info-box">

                            <div className="icon-box"><i className="fas fa-globe envelopeItem"></i></div>
                            <div className="inner-box">
                            <h3>Email</h3>
                        <Link className="linkItem" to="https://musing-williams-971d34.netlify.app/">Visit Website</Link>
                            </div>
                             </div>
                             <div className="single-info-box">

                            <div className="icon-box"><i className="fab fa-github envelopeItem"></i></div>
                            <div className="inner-box">
                            <h3>Github</h3>
                        <Link className="linkItem" to="https://github.com/sanjuhassan79">Take A Look Github</Link>
                            </div>
                             </div>
                             <div className="single-info-box">

                            <div className="icon-box"><i className="fab fa-linkedin envelopeItem"></i></div>
                            <div className="inner-box">
                            <h3>Linkedin</h3>
                        <Link className="linkItem" to="https://www.linkedin.com/in/sanjuhassan79/">View Profile</Link>
                            </div>
                             </div>
                </div>
                <div className="col-md-7 ">
                <Form onSubmit={sendEmail} className=" form__bd">
<Row className="mb-3 form__bd">
<Form.Group as={Col} controlId="formGridEmail" >
  <Form.Label>Name</Form.Label>
  <Form.Control type="text" placeholder="Enter Name" name="name" />
</Form.Group>

</Row>

<Form.Group className="mb-3" controlId="formGridAddress1">
<Form.Label>Email</Form.Label>
<Form.Control type="Email" placeholder="Enter Email" name="email"/>
</Form.Group>

<Form.Group className="mb-3" controlId="formGridAddress2">
<Form.Label>Subject</Form.Label>
<Form.Control type="text" placeholder="Enter Subject" name="subject"/>
</Form.Group>

<Row className="mb-3">
<Form.Group as={Col} controlId="formGridCity">
  <Form.Label>Message</Form.Label>
  <Form.Control as="textarea" rows={3} name="message"/>
</Form.Group>
</Row>



<Button variant="warning" type="submit">
Submit
</Button>
</Form>
                </div>
            </div>

        </div>
    </div>
    </div>
    );
};

export default Contact;