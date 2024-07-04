import React, { useState } from 'react';
import './Contact.css';
import { contactOptions } from '../../sources';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [firstname,setFirstname]=useState('');
  const [lastname,setLastname]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');
  const [phone,setPhone]=useState('')

  

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_dtc6ejn';
    const templateId = 'template_bfv3s06';
    const publicKey ='3wwoGh4fHLK18TcWD';

    const templateParams ={
      from_name:firstname,
      from_lastname:lastname,
      from_email:email,
      from_message:message,
      from_phone:phone,
      to_name:'ansul'

    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((Response)=>{
      
      setFirstname('');
      setLastname('');
      setEmail('');
      setMessage('');
      setPhone('');
      alert('Message sent successfully!',Response);
      
    })
    .catch((error)=>{
      alert('Error in sending email',);
    });
  };

  return (
    <section id='contact' data-aos='fade-zoom-in'>
      <div className="wrapper">
        <div className="contact-options">
          {contactOptions.map((option, index) => (
            <div className="flex-center option" data-aos='fade-right' key={index}>
              <div className="flex-center icon-wrapper">{option.icon}</div>
              <h4 className="muted">{option.title}</h4>
              <h3 className="value">{option.value}</h3>
            </div>
          ))}
        </div>
        <div className="contact-form" data-aos='fade-left'>
          <div className="top">
            <h1 className="title">
              <span className="gradient-text">Join Me!</span>
            </h1>
            <p className="muted">
              I build with precision and passion, creating web projects that stand out. It's as straightforward as that!
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="middle">
              <div className="flex row">
                <input
                  type="text"
                  placeholder="First name"
                  name='firstname'
                  className='control'
                  value={firstname}
                  onChange={(e)=>setFirstname(e.target.value)}
                  required
                />
                <input
                  type={'text'}
                  placeholder="Last Name"
                  name='lastname'
                  className='control'
                  value={lastname}
                  onChange={(e)=>setLastname(e.target.value)}
                  required
                />
              </div>
              <div className="flex row">
                <input
                  type="email"
                  placeholder='Email address'
                  name='email'
                  className='control'
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                
                />
                <input
                  type="tel"
                  placeholder='Phone number'
                  name='phone'
                  className='control'
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                  required
                />
              </div>
              <textarea
                name='message'
                cols={30}
                rows={10}
                placeholder='Message...'
                className='control'
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                required
              />
            </div>
            <div className="flex-center bottom">
              <button type="submit" className="btn primary">
                Send Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
