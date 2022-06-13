import React from 'react'
import { MiddleBanner } from '../../components/Banner/MiddleBanner/MiddleBanner'
import { StartBanner } from '../../components/Banner/StartBanner/StartBanner'
import { CoursesLayout } from '../../layout/CoursesLayout/Courses'

import { Navbar } from '../../containers/Navbar/Navbar'
import classes from './Main.module.scss'
import { CardCourse } from '../../layout/CoursesLayout/CardCourse/CardCourse'
import { CardWorkShop } from '../../layout/CoursesLayout/CardWorkShop/CardWorkShop'
import { Carousel } from '../../components/Carousel/Carousel'
import { FooterBanner } from '../../components/Banner/FooterBanner/FooterBanner'
import { CardArticles } from '../../layout/CoursesLayout/CardArticles/CardArticles'
import { Footer } from '../../containers/Footer/Footer'
import { Col, Row } from 'antd'

export const Main = () => {
  return (
    <div className={classes.wrapper}>
      <header>
        <p>One week only—50% off all courses with code 50OFF at checkout</p>
      </header>

      {/*----Navbar----*/}
      <Navbar />
      {/*----Start banner---- */}
      <StartBanner />
      <CoursesLayout
        title={'Featured Courses'}
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'}
        background={true}
        btn_title={'View All Courses'}
      >
        <Row>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <CardCourse />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <CardCourse />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <CardCourse />
          </Col>
        </Row>

      </CoursesLayout>

      {/*----Middle banner---- */}
      <MiddleBanner />
      <CoursesLayout
        title={'Upcoming Free Workshops'}
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'}
        background={false}
        btn_title={'View All Workshops'}
      >
        <Row>
          <Col xs={24} sm={12} md={12} lg={8} xl={8} span={8}>
            <CardWorkShop
              title={'Photography Basics'}
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.'}
            />
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} xl={8} span={8}>
            <CardWorkShop
              title={'Photography Basics'}
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.'}
            />
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} xl={8} span={8}>
            <CardWorkShop
              title={'Photography Basics'}
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.'}
            />
          </Col>
        </Row>
      </CoursesLayout>

      {/*----Carousel---- */}
      <Carousel />

      {/*----Footer banner---- */}
      <FooterBanner />
      <CoursesLayout
        title={'Recent Articles'}
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'}
        background={false}
        btn_title={'View all articles'}
      >
        <Row>
          <Col xs={24} sm={12} md={12} lg={8} xl={8} span={8}>
            <CardArticles />
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} xl={8} span={8}>
            <CardArticles />
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} xl={8} span={8}>
            <CardArticles />
          </Col>
        </Row>
      </CoursesLayout>

      {/*----Footer---- */}
      <Footer />
    </div >
  )
}
