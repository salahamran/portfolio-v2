import React from 'react';

const Contact = () => {
    return (
      <section id="contact" className="py-20 bg-black text-white">
          <div className="absolute inset-0 z-0 pointer-events-none h-[800px]">
    <iframe
      src="https://my.spline.design/meeet-12mPVnPUaVIex8KaZx2RMIlw/"
      className="w-full h-full border-none"
      allow="autoplay; fullscreen"
    ></iframe>
  </div>
        <div className="container">
          <div className="contact-form-container glow-blue">
            <div className="contact-header">
              <h2>Hey! Lets talk!</h2>
              <p>Do you have a question?</p>
              <p className="mt-4">Leave your email - Ill write you back for sure!</p>
            </div>
            
            <form className="flex flex-col items-center">
              <div className="contact-input-group">
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="contact-input"
                  required
                />
                <button type="submit" className="contact-button">
                  Get notified
                </button>
              </div>
              
              <div className="contact-email">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:salah.amran@yandex.ru" className="text-white hover:underline">
                  salah.amran@yandex.ru
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

export default Contact;