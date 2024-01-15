import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardSlider.css";

function CardSlider() {
    var settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='slider-container'>
            <Slider {...settings}>
                <div className="slider">
                    <img className='slider-image' src='/Drink_it/main_calendar.png' alt='' />
                </div>
                <div className="slider">
                    <img className='slider-image' src='/Drink_it/live_add.png' alt='' />
                </div>
                <div className="slider">
                    <img className='slider-image' src='/Drink_it/my_page.png' alt='' />
                </div>
            </Slider>
        </div>
    );
}

export default CardSlider