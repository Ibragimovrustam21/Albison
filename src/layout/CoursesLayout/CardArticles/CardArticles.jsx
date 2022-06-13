import React from 'react'
import classes from './cardArticles.module.scss'
import cardImg from '../../../assets/IMAGE (3).png'

export const CardArticles = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.img_box}>
        <img src={cardImg} alt="" />
      </div>
      <div className={classes.info_box}>
        <p className={classes.data}>February 8, 2021</p>
        <h4 className={classes.title}>The TikTok Algorithm: How to Get the Best Engagement</h4>
        <p className={classes.author}>Dianne Russell</p>
      </div>
    </div>
  )
}
