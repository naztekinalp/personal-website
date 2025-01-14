import style from './unicorn.module.scss'

const Unicorn = () => {


  return (
    <div className={style.unicorn_container}>
      <div className={style.unicorn}>
        <div className={style.header}>
          <div className={style.horn}>
            <div className={style.linesContainer}></div>
          </div>

          <div className={style.head}>
            <div className={style.face}>
              <div className={style.pink}>
              </div>
              <div className={style.white}></div>
            </div>
            <div className={style.hair}>
              <div className={style.innerHair}></div>
            </div>
          </div>
          <div className={style.neck}></div>
        </div>

        <div>
          <div className={style.body}>
            <div className={style.main}></div>
            <div className={style.tail}>
              <div className={style.innerHair}></div>
            </div>
          </div>

          <div className={style.legs}>
            <div className={style.leg}></div>
            <div className={style.leg}></div>
            <div className={style.leg}></div>
            <div className={style.leg}></div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Unicorn;