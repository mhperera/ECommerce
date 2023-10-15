import React, { useState } from 'react'
import "./Slider.scss";
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

const sliderImageList = [
    "https://images.pexels.com/photos/3605013/pexels-photo-3605013.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&dpr=1",
    "https://images.pexels.com/photos/2229490/pexels-photo-2229490.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&dpr=1",
    "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&dpr=1",
    "https://images.pexels.com/photos/70845/girl-model-pretty-portrait-70845.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&dpr=1",
    "https://images.pexels.com/photos/2419540/pexels-photo-2419540.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&dpr=1",
];

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const previousSlide = () => {
        setCurrentSlide(currentSlide===0 ? (sliderImageList.length-1) : (prevState) => prevState-1);
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide===(sliderImageList.length-1) ? 0: (prevState) => prevState+1);
    }

    return (
        <div className='slider'>
            <div className="container" style={{ 'transform': `translateX(-${currentSlide*100}vw)` }}>
                <img src={sliderImageList[0]} alt="" onClick={nextSlide} />
                <img src={sliderImageList[1]} alt="" onClick={nextSlide} />
                <img src={sliderImageList[2]} alt="" onClick={nextSlide} />
                <img src={sliderImageList[3]} alt="" onClick={nextSlide} />
                <img src={sliderImageList[4]} alt="" onClick={nextSlide} />
            </div>
            <div className="icons">
                <div className="icon" onClick={previousSlide}><ArrowBackIosNewSharpIcon /></div>
                <div className="icon" onClick={nextSlide}><ArrowForwardIosSharpIcon /></div>
            </div>
        </div>
    )
}

export default Slider
