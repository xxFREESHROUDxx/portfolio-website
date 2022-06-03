import React from 'react';
import './Services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        {/* UI/UX Design  */}
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mobile App UX and UI Design Services</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cross-Platform Experiences Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>UI and UX Consulting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design Workshops</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>It's all about the User Experience</p>
            </li>
          </ul>
        </article>
        {/* Web Development*/}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>E-Commerce Website Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Online Job Portal Websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Informative Website Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Online News Portal Website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Travel and Trekking Website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Portfolio Website Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Everywhere & Every Device, Your Site Should Flow Seamlessly</p>
            </li>
          </ul>
        </article>
        {/* Content Creation */}
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Blog Posts</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Long-Form Content</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Online Guides</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Infographics</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Micrographics</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Videos</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
