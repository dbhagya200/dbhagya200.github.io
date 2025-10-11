import React, { useState } from 'react';
import { FaMap, FaShareAlt, FaEnvelope, FaPhone, FaTwitter, FaFacebook, FaInstagram, FaSkype, FaLinkedin } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: FaMap,
      title: 'My Address',
      content: 'A108 Adam Street, New York, NY 535022'
    },
    {
      icon: FaShareAlt,
      title: 'Social Profiles',
      isSocial: true
    },
    {
      icon: FaEnvelope,
      title: 'Email Me',
      content: 'contact@example.com'
    },
    {
      icon: FaPhone,
      title: 'Call Me',
      content: '+1 5589 55488 55'
    }
  ];

  const socialLinks = [
    { href: '#', icon: FaTwitter, name: 'Twitter' },
    { href: '#', icon: FaFacebook, name: 'Facebook' },
    { href: '#', icon: FaInstagram, name: 'Instagram' },
    { href: '#', icon: FaSkype, name: 'Skype' },
    { href: '#', icon: FaLinkedin, name: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="py-20 bg-black/90 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Contact</h2>
          <div className="w-20 h-px bg-green-400 inline-block mb-4"></div>
          <p className="text-3xl font-bold text-white uppercase">Contact Me</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div key={index} className="bg-white/8 rounded-lg p-6 info-box">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl mr-4 flex-shrink-0">
                    <IconComponent />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white/50 mb-2">{info.title}</h3>
                    {info.isSocial ? (
                      <div className="flex gap-3 social-links">
                        {socialLinks.map((social, idx) => {
                          const SocialIcon = social.icon;
                          return (
                            <a
                              key={idx}
                              href={social.href}
                              className="text-white/70 hover:text-green-500 transition-colors text-lg"
                              aria-label={social.name}
                            >
                              <SocialIcon />
                            </a>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-white">{info.content}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white/8 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full bg-white/8 border-0 text-white px-4 py-3 rounded placeholder-gray-400 focus:bg-white/11 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full bg-white/8 border-0 text-white px-4 py-3 rounded placeholder-gray-400 focus:bg-white/11 transition-colors"
              />
            </div>
          </div>
          <div className="mb-6">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full bg-white/8 border-0 text-white px-4 py-3 rounded placeholder-gray-400 focus:bg-white/11 transition-colors"
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Message"
              required
              className="w-full bg-white/8 border-0 text-white px-4 py-3 rounded placeholder-gray-400 focus:bg-white/11 transition-colors resize-none"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 text-white px-8 py-3 rounded hover:bg-green-600 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;