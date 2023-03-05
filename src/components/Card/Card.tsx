import './Card.scss';



export const Card = () => {

  

  return(
    <div className='card__container'>
      <div className='card__img' style={{ backgroundImage: 'url(https://avatars.mds.yandex.net/i?id=2a0000017a074f8311be88ea0649ff191425-3767926-images-thumbs&n=13)'}}></div>
      <div className='card__content'>
        <h1 className='card__title'>Lorem ipsum dolor sit amet.</h1>
        <div className='card__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolores nulla praesentium voluptates excepturi architecto dicta dignissimos neque tempore sit error maiores atque corrupti nobis molestiae libero cupiditate, enim ipsa. Quos nobis ducimus totam incidunt iste sit sint assumenda impedit nam quisquam dolores velit tempore omnis reiciendis vel similique, officia a ex! Culpa repellat dolores optio dolor enim aperiam soluta omnis debitis hic cupiditate quae in quod cumque esse neque dicta rem sint modi veniam, quia doloremque odio! Est ipsa porro amet, accusamus ipsam facere hic cupiditate optio consequuntur asperiores nihil omnis provident eum illo quam quibusdam suscipit doloribus totam.</div>
        <button className='card__button'>Посмотреть</button>
      </div>
    </div>
  )
}