import './Card.scss';



export const Card = () => {
  return(
    <div className='card__container'>
      <div className='card__img'></div>
      <div className='card__text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
      <button className='card__button'>Посмотреть</button>
    </div>
  )
}