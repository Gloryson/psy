import { ContentData } from '../../App';
import './ContentPage.scss';



interface ContentPageProps {
  content: ContentData[];
}



export const ContentPage: React.FC<ContentPageProps> = ({ content }) => {

  return(
    <>
      {content.map(card => (
        <div className='card__container' key={card.id}>
          <div className='card__img' style={{ backgroundImage: `url(${card.url})`}}></div>
          <div className='card__content'>
            <h1 className='card__title'>{card.title}</h1>
            <div className='card__text'>{card.text}</div>
            <button className='card__button'>Посмотреть</button>
          </div>
        </div>
      ))}
    </>
  )
}