



export const ContactsPage = () => {
  return(
    <section className='contacts__page__container'>
      <input className='contacts__input__name' type='text' placeholder='Имя'/>
      <input className='contacts__input__email' placeholder='Электронная почта'/>
      <textarea className='contacts__textarea' placeholder='Введите текст'></textarea>
      <button className='contacts__form__button'>Отправить</button>
    </section>
  )
}