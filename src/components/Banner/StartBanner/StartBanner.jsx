import React from 'react'
import classes from './banner.module.scss'
import bannerImg from '../../../assets/banner/IMAGE.png'
import { Row, Col } from 'antd'
import { Layout } from '../../../layout/Layout'

import detail_1 from '../../../assets/banner/Rectangle.png'
import detail_2 from '../../../assets/banner/Rectangle (1).png'
import detail_3 from '../../../assets/banner/Rectangle (2).png'
import detail_wave from '../../../assets/banner/wave.png'


export const StartBanner = () => {
  return (
    <div className={classes.wrapper}>
      <Layout>
        <Row >
          <Col xs={24} sm={12} md={12} lg={12} xl={11} span={11}>
            <div className={classes.course_name}>
              <p>Featured Course</p>
            </div>
            <h2 className={classes.title}>Run your own online learning platform</h2>
            <p className={classes.subtitle}>A deep-dive on the Instagram algorythm, hashtags, content strategy, and branding.</p>
            <p className={classes.author}>Kathryn Murphy</p>
            <button className={classes.btn}>Learn more</button>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={13} span={13}>
            <div className={classes.img_box}>
              <img className={classes.banner_img} src={bannerImg} alt="" />
              <img className={classes.detail_1} src={detail_1} alt="" />
              <img className={classes.detail_2} src={detail_2} alt="" />
              <img className={classes.detail_3} src={detail_3} alt="" />
              <img className={classes.detail_wave} src={detail_wave} alt="" />
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
  )
}
