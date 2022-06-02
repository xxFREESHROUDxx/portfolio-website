import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com/xxfreeshroudxx',
    demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts Template & Infographics in Figma',
    github: 'https://github.com/xxfreeshroudxx',
    demo: 'https://dribble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma Dashboard UI Kit for Data Design Web Apps',
    github: 'https://github.com/xxfreeshroudxx',
    demo: 'https://dribble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining Task and Tracking Progress',
    github: 'https://github.com/xxfreeshroudxx',
    demo: 'https://dribble.com/shots/16955822-Maintaining-tasks-and-tracking-progress',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Charts Templates & Infographics in Figma',
    github: 'https://github.com/xxfreeshroudxx',
    demo: 'https://dribble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Charts Templates & Infographics in Figma',
    github: 'https://github.com/xxfreeshroudxx',
    demo: 'https://dribble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma',
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn'>
                  Github
                </a>
                <a href={demo} target='_blank' className='btn btn-primary'>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
