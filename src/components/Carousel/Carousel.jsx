import React from 'react'
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Slider from "react-slick";
import classes from './carousel.module.scss'

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    autoplay: true,
    arrows: false,
  };
  return (
    <div className={classes.wrapper}>
      <Slider {...settings}>
        <div className={classes.carousel_item_block}>
          <div className={classes.rate}>
            <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0.0012207L19.5922 11.0569H31.2169L21.8123 17.8898L25.4046 28.9455L16 22.1127L6.59543 28.9455L10.1877 17.8898L0.783081 11.0569H12.4078L16 0.0012207Z" fill="#1C1C33" />
            </svg>
            <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0.0012207L19.5922 11.0569H31.2169L21.8123 17.8898L25.4046 28.9455L16 22.1127L6.59543 28.9455L10.1877 17.8898L0.783081 11.0569H12.4078L16 0.0012207Z" fill="#1C1C33" />
            </svg>
            <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0.0012207L19.5922 11.0569H31.2169L21.8123 17.8898L25.4046 28.9455L16 22.1127L6.59543 28.9455L10.1877 17.8898L0.783081 11.0569H12.4078L16 0.0012207Z" fill="#1C1C33" />
            </svg>
            <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0.0012207L19.5922 11.0569H31.2169L21.8123 17.8898L25.4046 28.9455L16 22.1127L6.59543 28.9455L10.1877 17.8898L0.783081 11.0569H12.4078L16 0.0012207Z" fill="#1C1C33" />
            </svg>
            <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0.0012207L19.5922 11.0569H31.2169L21.8123 17.8898L25.4046 28.9455L16 22.1127L6.59543 28.9455L10.1877 17.8898L0.783081 11.0569H12.4078L16 0.0012207Z" fill="#1C1C33" />
            </svg>
          </div>
          <p className={classes.text}>
            “Kate’s courses are a game changer.
            She’s thorough, organized, and explains things in a no-nonsense way
            that makes it easy for anyone—beginners to experts—to learn something
            from her courses and take their game to the next level.”
          </p>
          <p className={classes.author}>James Brown, Influencer</p>
        </div>
        <div className={classes.carousel_item_block}>
          <div className={classes.rate}>
            <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0.0012207L19.5922 11.0569H31.2169L21.8123 17.8898L25.4046 28.9455L16 22.1127L6.59543 28.9455L10.1877 17.8898L0.783081 11.0569H12.4078L16 0.0012207Z" fill="#1C1C33" />
            </svg>
            <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0.0012207L19.5922 11.0569H31.2169L21.8123 17.8898L25.4046 28.9455L16 22.1127L6.59543 28.9455L10.1877 17.8898L0.783081 11.0569H12.4078L16 0.0012207Z" fill="#1C1C33" />
            </svg>
            <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0.0012207L19.5922 11.0569H31.2169L21.8123 17.8898L25.4046 28.9455L16 22.1127L6.59543 28.9455L10.1877 17.8898L0.783081 11.0569H12.4078L16 0.0012207Z" fill="#1C1C33" />
            </svg>
            <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0.0012207L19.5922 11.0569H31.2169L21.8123 17.8898L25.4046 28.9455L16 22.1127L6.59543 28.9455L10.1877 17.8898L0.783081 11.0569H12.4078L16 0.0012207Z" fill="#1C1C33" />
            </svg>
            <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0.0012207L19.5922 11.0569H31.2169L21.8123 17.8898L25.4046 28.9455L16 22.1127L6.59543 28.9455L10.1877 17.8898L0.783081 11.0569H12.4078L16 0.0012207Z" fill="#1C1C33" />
            </svg>
          </div>
          <p className={classes.text}>
            “Kate’s courses are a game changer.
            She’s thorough, organized, and explains things in a no-nonsense way
            that makes it easy for anyone—beginners to experts—to learn something
            from her courses and take their game to the next level.”
          </p>
          <p className={classes.author}>James Brown, Influencer</p>
        </div>
      </Slider>
    </div>
  )
}
