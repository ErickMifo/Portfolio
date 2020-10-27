import React from 'react';
import './styles.css';
import CardItem from './cardItem';
import chat from '../images/chat-app.png';
import agregador from '../images/agregador.png';


function CardsProjects() {
  return (
    <div className='cards'>
      <div className='cards__container'>
          <ul className='cards__items'>
            <CardItem
              src={chat}
              text='Chat-app'
              path='https://chat-app.erickmifo.vercel.app/'
              alt='Chat-app-image'
            />
             <CardItem
              src={agregador}
              text='Agregador de vídeos'
              path='https://agregador-videos.vercel.app/'
              alt='Agregador de vídeos-image'
            />
             <CardItem
              src={chat}
              text='Outro'
              path='https://github.com/ErickMifo'
              alt='Outro'
            />
          </ul>
        </div>
      </div>

  );
}

export default CardsProjects;