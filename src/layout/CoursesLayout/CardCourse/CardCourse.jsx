import React from 'react'
import classes from './cardCourse.module.scss'
import cardImg from '../../../assets/IMAGE (4).png'
export const CardCourse = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.img_box}>
        <img src={cardImg} alt="" />
      </div>
      <div className={classes.info_box}>
        <h4 className={classes.title}>How to Increase Your Engagement on Instagram</h4>
        <p className={classes.name}>Katie Murphy</p>
        <p className={classes.cost}>$ 59.99 USD</p>
        <a href="/">Learn More</a>
      </div>
    </div>
  )
}
