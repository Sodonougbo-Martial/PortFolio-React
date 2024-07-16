
import React from 'react';
import './styles.css';
import Button from '../../Button';





function Contact() {
  return (

    <div className="contact">

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