import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://www.linkedin.com/in/baibhav-kc-388b571aa/' rel="noopener noreferrer"
        target='_blank'
      >
        <BsLinkedin />
      </a>
      <a href='https://github.com/xxfreeshroudxx' target='_blank' rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href='https://dribbble.com/baibhavkc11' target='_blank' rel="noopener noreferrer">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
