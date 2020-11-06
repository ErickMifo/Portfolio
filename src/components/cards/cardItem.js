import { useAnimation, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import  { useInView } from 'react-intersection-observer'

function CardItem({ path, alt, src, text}) {

  const animation = useAnimation()

  const [productRef, InView] = useInView({

    triggerOnce: true,
    rootMargin: '-170px'

  })


  useEffect(() => {
    if(InView){
      animation.start('productVisible')
    }
  }, [animation, InView])


  return (

      <motion.li 
      ref={productRef}
      animate={animation}
      initial='hidden'
      variants={{
        productVisible:{
          opacity: 1,
          x: 0,
          transition: {duration: 1}
        },
         hidden: {
          opacity: 0,
          x: -100
        }
      }}
      className='cards__item'>
        <a className='cards__item__link' rel="noopener noreferrer" target="_blank" href={path}>
          <figure>
            <img
              className='cards__item__img'
              alt={alt}
              src={src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{text}</h5>
          </div>
        </a>
      </motion.li>

  );
}

export default CardItem;