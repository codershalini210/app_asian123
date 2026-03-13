import React from 'react'

export default function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <div className='flex'>
        
        <div className='left'>
          <h1>Feel free to Contact  us </h1>  
          <div className='form-group '>
            <label >Name</label>
            <input type="text"  className="txt"/>
          </div>
          <div className='form-group '>
            <label>Contact no </label>
            <input type="text" className="txt"/>
          </div>
          <div className='form-group '>
            <label>MEssage</label>
            {/* <input type="text" /> */}
            <textarea className="txt" style={{height:"200px"}}></textarea>
          </div>
          <div>
            <input type="button" value="Send" />
            <input type="button" value="Cancel" />
          </div>
        </div>
        <div className='right'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0917941135626!2d72.54683280886789!3d23.057096014955857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8585f9955ead%3A0xabe3c468cb63bd0!2sPromise%20Academy!5e0!3m2!1sen!2sin!4v1773384182012!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

    </div>
  )
}
