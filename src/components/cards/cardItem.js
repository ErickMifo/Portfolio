import React from 'react';

function CardItem({ path, alt, src, text}) {
  return (

      <li className='cards__item'>
        <a className='cards__item__link' rel="noopener noreferrer" target="_blank" href={path}>
          <figure className='cards__item__pic-wrap'>
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
      </li>

  );
}

export default CardItem;