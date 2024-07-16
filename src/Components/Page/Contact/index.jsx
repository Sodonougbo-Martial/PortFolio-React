
import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from '../../Button';
import Navbar from '../../Header'





function Contact() {
  return (

    <div className="contact">
              <Router>
              <Navbar />
                <Routes>
                  
                  <Route path="/contact" component={Contact} />
                </Routes>
              </Router>
              

    <div className='contact-container1'>
            <form>
                <div>
                    <label for="name">Name</label>
                    <input className='infirstNameput' placeholder='Exemple' />
                </div>

                <div>
                    <label for="email">Email</label>
                    <input className='inmailput' placeholder='Value' />
                </div>

       
                <div>
                  <label for="message">Message</label>
                  <div className="container-linear-gradient">
                    <textarea id="message" name="message"  placeholder='Hello...' required></textarea>

                  </div>
                </div>


                
                <Button className='contact-btn' text="Submit" />

            </form>
    </div>    


    </div>
  ) ;
}

export default Contact;