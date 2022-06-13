import React from 'react'
import classes from './banner.module.scss'
import { Row, Col } from 'antd'
import { Layout } from '../../../layout/Layout'
import bannerImg from '../../../assets/banner/IMAGE (2).png'
import detail_1 from '../../../assets/banner/Rectangle.png'
import detail_2 from '../../../assets/banner/Rectangle (1).png'
import detail_3 from '../../../assets/banner/Rectangle (2).png'
import detail_wave from '../../../assets/banner/wave.png'

export const FooterBanner = () => {
  return (
    <div className={classes.wrapper}>
      <Layout>
        <Row >
          <Col xs={24} sm={24} md={14} lg={12} xl={12} span={12}>
            <div className={classes.img_box}>
              <img className={classes.banner_img} src={bannerImg} alt="" srcset="" />
              <img className={classes.detail_1} src={detail_1} alt="" srcset="" />
              <img className={classes.detail_2} src={detail_2} alt="" srcset="" />
              <img className={classes.detail_3} src={detail_3} alt="" srcset="" />
              <img className={classes.detail_wave} src={detail_wave} alt="" srcset="" />
            </div>
          </Col>
          <Col xs={24} sm={24} md={10} lg={12} xl={12} span={12} className={classes.banner_info}>
            <div className={classes.title}>
              <p>A Passion for Teaching</p>
            </div>
            <p className={classes.subtitle}>A deep-dive on the Instagram algorythm, hashtags, content strategy, and branding.</p>
            <button className={classes.btn}>About Skillz</button>
          </Col>
        </Row>
      </Layout>
    </div>
  )
}
