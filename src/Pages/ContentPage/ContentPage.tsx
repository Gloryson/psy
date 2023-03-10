import { useState } from 'react';
import { ContentData } from '../../App';
import { useStopScroll } from '../../helpers';
import './ContentPage.scss';



interface ContentPageProps {
  content: ContentData[];
}



export const ContentPage: React.FC<ContentPageProps> = ({ content }) => {

  const [modal, setModal] = useState('');

  useStopScroll(modal);

  return(
    <>
      {content.map(card => (
        <div className='card__container' key={card.id}>
          <div className='card__img' style={{ backgroundImage: `url(${card.url})`}}></div>
          <div className='card__content'>
            <h1 className='card__title'>{card.title}</h1>
            <div className='card__text'>{card.text}</div>
            <button className='card__button' onClick={() => setModal(() => card.id)}>Посмотреть</button>
          </div>
          <div className={`card__modal__window  ${modal === card.id ? '' : 'off'}`}>
            <div className='card__modal__container'>
              <div className='card__modal__text'>{card.text}</div>
            </div>
            <div className='card__modal__close' onClick={() => setModal(() => '')}>&#215;</div>
          </div>
        </div>
      ))}
    </>
  )
}