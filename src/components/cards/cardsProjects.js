import React from 'react';
import './styles.css';
import CardItem from './cardItem';
import chat from '../images/chat-app.png';
import agregador from '../images/agregador.png';
import blog from '../images/blog.png'




function CardsProjects() {
  return (
    <div className='cards'>
          <ul className='cards__items'>
            <CardItem
              src={chat}
              text='Chat-app. projeto feito em React e Node usando socket.io;'
              path='https://chat-app.erickmifo.vercel.app/'
              alt='Chat-app-image'
            />
            
             <CardItem
              src={agregador}
              text='Agregador de vídeos. Projeto feito durante a imersão react alura;'
              path='https://agregador-videos.vercel.app/'
              alt='Agregador de vídeos-image'
            />
          </ul>
        </div>

  );
}

export default CardsProjects;