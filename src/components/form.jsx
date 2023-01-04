import React from 'react';
import { useState } from 'react';
import RightArrow from '../images/RightArrow.png';
import LeftArrow from '../images/LeftArrow.png';
import locus from '../images/lucas.jpg';
import oladimeji from '../images/oladimeji.jpg';
import { AnimatePresence, motion } from 'framer-motion';
import FormInput from './formInput';

const images = [locus, oladimeji];

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

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
  },
  {
    name: 'Pablo Picasso',
    occupation: 'Painter, Sculptor',
    company: 'Cubism',
  },
];

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
            animate='animate'
            initial='initial'
            exit='exit'
            transition={transition}
            variants={variants}
            style={{
              backgroundImage: `url(${images[currentImage]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
              width: '50%',
              flexGrow: 1,
              position: 'relative',
              transform: 'translateX',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'contain',
                width: '100%',
                height: '100%',
                padding: '0 20px',
                fontFamily: 'Oswald',
              }}
            >
              <h1 className='text-5xl text-white'>
                "Art is the expression of the soul, the manifestation of emotion
                and imagination into something tangibly beautiful."
              </h1>
            </div>
            <div
              className='absolute bottom-0 left-0 p-6'
              style={{ fontFamily: 'Oswald Light' }}
            >
              <h2 className='text-white mb-2'>{authors[currentAuthor].name}, </h2>
              <p className='text-white '>{authors[currentAuthor].occupation}</p>
              <p className='text-white'>{authors[currentAuthor].company}</p>
            </div>

            <div
              className='absolute bottom-0 right-0 p-6 '
              style={{ display: 'flex', width: '100px' }}
            >
              <img
                onClick={handleToggle}
                src={LeftArrow}
                alt='Toggle Icon'
                style={{ cursor: 'pointer', width: '30px', marginRight: '5px' }}
              />
              <img
                onClick={handleToggle}
                src={RightArrow}
                alt='Toggle Icon'
                style={{ cursor: 'pointer', width: '30px', marginLeft: '5px' }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
        {/* our form input */}
        <FormInput />
      </div>
    </>
  );
}
