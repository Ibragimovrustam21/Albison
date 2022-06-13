import React from 'react'
import { Layout } from '../Layout'
import classes from './courses.module.scss'

export const CoursesLayout = ({ children, title, text, btn_title, background = false }) => {
  return (
    <div style={background ? { backgroundColor: '#23233B' } : { backgroundColor: '#F5F5F5' }} className={classes.wrapper}>
      <Layout>
        <div className={classes.title_box}>
          <h3 style={background ? { color: '#F6F6F8' } : { color: '#1C1C33' }}>{title}</h3>
        </div>
        <p style={background ? { color: '#F6F6F8' } : { color: '#1C1C33' }} className={classes.text}>
          {text}
        </p>
        <div className={classes.btn_block}>
          <button className={classes.btn}>{btn_title}</button>
        </div>
        <div className={classes.card_box}>
          {children}
        </div>
      </Layout>
    </div>
  )
}
