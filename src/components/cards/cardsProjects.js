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
              text='Site pra ecommerce'
              path='https://5fa46740b923111fa301d9d7--eager-lumiere-87e7c6.netlify.app/'
              alt='ecommerce'
            />
          </ul>
        </div>
      </div>

  );
}

export default CardsProjects;