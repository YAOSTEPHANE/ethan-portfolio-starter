import React, { useState } from 'react';


//icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,

} from 'react-icons/fa';
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from 'react-icons/si';
//data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];



//components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';


//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
//counter
import Countup from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <motion.div variants={fadeIn('right, 0.2')} initial="hidden" animate="show" exit="hidden"
        className='hidden xl:flex absolute bottom-0 -left-[370px] '>
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full 
      flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex-col justify-center'>
        <motion.h2 variants={fadeIn('right, 0.2')} initial="hidden" animate="show" exit="hidden" className='h2'>Captivation <span className='text-accent'>Histoires</span> birth magnificent design.</motion.h2>
        <motion.p variants={fadeIn('right, 0.4')} initial="hidden" animate="show" exit="hidden" className='max-w-[500px] mx-auto xl:mx-0 mb-6 
        xl:mb-12 px-2 xl:px-0'>10 years ago, i began freelancing as a developper. Since the, Ive done remote
          work for agencies, connsulted for startups, and collaboration on digital products
          for business and consumer use.
        </motion.p>
        {/* counters */}
        <div className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
        <div className='flex flex-1 xl:gap-x-6'>
          {/* experience */}
          <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10
           after:absolute after:top-0 after:right-0'>
            <div className='text-2xl xl:text-4xl font-extrabold text-accent'>
              <Countup start={0} end={10} duration={5} /> + 
            </div>
            <div className='text-xs uppercase tracking-[1px] max-w-[100px]'>Years of experiences</div>
           </div>
           {/* clients */}
           <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10
           after:absolute after:top-0 after:right-0'>
            <div className='text-2xl xl:text-4xl font-extrabold text-accent'>
              <Countup start={0} end={250} duration={5} /> + 
            </div>
            <div className='text-xs uppercase tracking-[1px] max-w-[100px]'>Clients Satisfaites</div>
           </div>
           {/* visiteurs */}
           <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10
           after:absolute after:top-0 after:right-0'>
            <div className='text-2xl xl:text-4xl font-extrabold text-accent'>
              <Countup start={0} end={650} duration={5} /> + 
            </div>
            <div className='text-xs uppercase tracking-[1px] max-w-[100px]'>Visiteurs</div>
           </div>
           {/* awards */}
           <div className='relative flex-1 after:w-[1px] '>
            <div className='text-2xl xl:text-4xl font-extrabold text-accent'>
              <Countup start={0} end={8} duration={5} /> + 
            </div>
            <div className='text-xs uppercase tracking-[1px] max-w-[100px]'>Winning award</div>
           </div>
        </div>
        </div>
        </div>
        {/* info */}
        <motion.div variants={fadeIn('left, 0.4')} initial="hidden" animate="show" exit="hidden" className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div key={itemIndex}
                  className={`${index === itemIndex &&
                    'text-accent after:w-[100%]after:bg-accent after:transition-all after:duration-300'} 
                  cursor-pointer capitalize
                   xl:text-lg relative after:w-8 
              after:h-[2px] after:bg-white after:absolute 
              after:-bottom-1 after:left-0 `} onClick={() => setIndex(itemIndex)}>{item.title}</div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
          items-center xl:item-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className='flex-1 flex flex-col md:flex-row 
                max-w-max gap-x-2 items-center text-white/60'>
                  {/* title */}
                  <div className='font-lightmb-2 md:0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        
                        <div key={itemIndex} className='text-2xl'>{icon}</div>
                      );
                    })}

                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;