



export const ContactsPage = () => {
  return(
    <section className='contacts__page__container'>
      <input className='contacts__input__name' type='text' placeholder='Имя'/>
      <input className='contacts__input__email' placeholder='Электронная почта'/>
      <input className='contacts__input__title' placeholder='Тема письма'/>
      <textarea className='contacts__textarea' placeholder='Введите текст' />
      <button className='contacts__form__button'>Отправить</button>
    </section>
  )
}