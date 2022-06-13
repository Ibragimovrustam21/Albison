import React from 'react'
import classes from './cardWorkShop.module.scss'

export const CardWorkShop = ({ title, text }) => {
  return (
    <div className={classes.wrapper}>
      <h4 className={classes.title}>{title}</h4>
      <p className={classes.text}>{text}</p>
      <a href="/">Learn More</a>
    </div>
  )
}
