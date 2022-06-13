import React from 'react'
import classes from './banner.module.scss'
import { Row, Col } from 'antd'
// import { Layout } from '../../../layout/Layout'
import bannerImg from '../../../assets/IMAGE (1).png'

export const MiddleBanner = () => {
  return (
    <div className={classes.wrapper}>
      {/* <Layout> */}
      <Row >
        <Col xs={24} sm={24} md={12} lg={12} xl={12} span={12}>
          <div className={classes.img_box}>
            <img src={bannerImg} alt="" srcset="" />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} span={12} className={classes.banner_info}>
          <div className={classes.title}>
            <p>Get personalized learning recommendations</p>
          </div>
          <p className={classes.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urnaLorem ipsum dolor sit amet.</p>
          <button className={classes.btn}>Contact us</button>
        </Col>
      </Row>
      {/* </Layout> */}
    </div>
  )
}
