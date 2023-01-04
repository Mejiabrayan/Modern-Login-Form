import React from 'react';
import { useState } from 'react';
import RightArrow from '../images/RightArrow.png';
import LeftArrow from '../images/LeftArrow.png';
import locus from '../images/lucas.jpg';
import oladimeji from '../images/oladimeji.jpg';
import { AnimatePresence, motion } from 'framer-motion';
import FormInput from './formInput';
import AuthorCard from '../components/authorCard';

const images = [locus, oladimeji];

const authors = [
  {
    name: 'Lucas Gouvêa',
    occupation: 'Photographer, Designer',
    company: 'Locus Studio',
    website: 'https://locus.studio/',
  },
  {
    name: 'Oladimeji Odunsi',
    occupation: 'Photographer & Visual Artist',
    company: 'Oladimeji',
    website: 'https://www.oladimeg.com/contact',
  }
];

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};
const variants = {
  initial: { x: '-100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '100%', opacity: 0 },
};

export default function Form() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentAuthor, setCurrentAuthor] = useState([0]);

  const handleToggle = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
      setCurrentAuthor([0]);
    } else {
      setCurrentImage(currentImage + 1);
      setCurrentAuthor([currentImage + 1]);
    }
  };

  return (
    <>
      <div className='flex'>
        <AnimatePresence>
          <motion.div
            key={currentImage}
            animate='animate'
            initial='initial'
            exit='exit'
            transition={transition}
            variants={variants}
            className='w-1/2 h-screen bg-cover bg-center hidden sm:block md:block relative'
            style={{ backgroundImage: `url(${images[currentImage]})` }}
          >
            <div className='absolute top-0 p-6 left-0 w-full h-full flex items-center justify-center font-oswald md:text-left text-center'>
              <h1 className='text-5xl text-white'>
                "Art is the expression of the soul, the manifestation of emotion
                and imagination into something tangibly beautiful."
              </h1>
            </div>

            <AuthorCard author={authors[currentAuthor]} />
            <div className='flex absolute bottom-0 right-0 p-6'>
              <img
                onClick={handleToggle}
                src={LeftArrow}
                alt='Toggle Icon'
                className='hidden sm:block md:block'
                style={{
                  cursor: 'pointer',
                  width: '30px',
                  marginRight: '5px',
                }}
              />

              <img
                className='hidden sm:block md:block'
                onClick={handleToggle}
                src={RightArrow}
                alt='Toggle Icon'
                style={{
                  cursor: 'pointer',
                  width: '30px',
                  marginLeft: '5px',
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
        {/* our form input */}
        <FormInput className='sm:w-full' />
      </div>
    </>
  );
}
