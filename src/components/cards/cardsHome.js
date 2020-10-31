import React from 'react';
import './styles.css';
import CardItem from './cardItem';
import background from '../images/github.png'
import background2 from '../images/cv-image.png'


function CardsHome() {
  return (
    <div className='cards'>
      <div className='cards__container'>
          <ul className='cards__items'>
            <CardItem
              src={background}
              text='GitHub'
              path='https://github.com/ErickMifo'
              alt='GitHub'
            />
               <CardItem
              src={background2}
              text='CV'
              path='https://portfolio.erickmifo.vercel.app/cv'
              alt='CV'
            />
          </ul>
        </div>
      </div>

  );
}

export default CardsHome;