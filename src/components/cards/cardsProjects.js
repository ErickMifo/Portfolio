import React from 'react';
import './styles.css';
import CardItem from './cardItem';
import chat from '../images/chat-app.png';
import agregador from '../images/agregador.png';
import adm from '../images/ADM.png'




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
             <CardItem
              src={adm}
              text='Ecommerce feito em gatsby para disciplina Administração de projetos.'
              path='https://eager-lumiere-87e7c6.netlify.app/'
              alt='ecommerce'
            />
          </ul>
        </div>

  );
}

export default CardsProjects;