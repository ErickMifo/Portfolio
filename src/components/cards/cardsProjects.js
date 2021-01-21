import React from 'react';
import './styles.css';
import CardItem from './cardItem';
import joke from '../images/cn-jokes.png';
import agregador from '../images/agregador.png';
import blog from '../images/blog.png'




function CardsProjects() {
  return (
    <div className='cards'>
          <ul className='cards__items'>
          <CardItem
              src={blog}
              text='Blog feito com Gatsby. Posts transformados de .md para HTML'
              path='https://stoic-montalcini-357809.netlify.app/'
              alt='Blog'
            />
            <CardItem
              src={joke}
              text='CN-jokes. Projeto feito em Reactjs consumindo dados de uma API;'
              path='https://truckpag-teste.erickmifo.vercel.app/'
              alt='CN-jokes image'
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