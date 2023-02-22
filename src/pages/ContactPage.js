
import React from 'react';
import '../App.css';
import './ContactPage.css'

function ContactPage() {
  return (
    <div className={`dark`}>
      <div>
        <iframe style={{ marginTop: '50px' }} width="560" height="315" src="https://www.youtube-nocookie.com/embed/Up3YNeLA6MQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <main className='main'>
        <div>
          <button class='btn-subscriber'>Hello</button>
        </div>
        <div className='social-group'>
          <div className='btn-container'>
            <button class='btn-subscriber'>Facebook</button>
          </div>
          <div className='btn-container'>
            <button class='btn-subscriber'>Google</button>
          </div>
          <div className='btn-container'>
            <button class='btn-subscriber'>Github</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactPage;
