import style from './background.module.scss';

const Background = () => {
  return (
    <div className={style.unicorn_component_container}>
      <div className={style.bg}>
        <div className={style.clouds}>
          <div className={style.cloud}></div>
          <div className={`${style.cloud} ${style.alt} ${style.bot}`}></div>
        </div>
        <div className={style.stars}>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
        </div>
        <div className={style.planets}>
          <div className={style.planet}></div>
          <div className={style.planet}></div>
          <div className={style.planet}></div>
          <div className={style.planet}></div>
          <div className={style.planet}></div>
          <div className={style.planet}></div>
          <div className={style.planet}></div>
          <div className={style.planet}></div>
          <div className={style.planet}></div>
          <div className={style.planet}></div>
        </div>
      </div>
    </div>
  )
};

export default Background;