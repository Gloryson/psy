



export const MainPage: React.FC<{ style: string }> = ({ style }) => {

  return(
    <section className={`main__page ${style}`}>
      <div className="main__title">
        <h1>АНАТОЛИЙ БОЛКУНОВ</h1>
      </div>
      <div className="main__content"></div>
      <div className="main__title__name">
        <h1>ПСИХОЛОГ</h1>
      </div>
    </section>
  )
}