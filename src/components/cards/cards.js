import React from 'react';
import './styles.css';
import CardItem from './cardItem';
import background from '../images/github.png'


function Cards() {
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
          </ul>
        </div>
      </div>

  );
}

export default Cards;