import React, { useState } from 'react'
import "./Slider.scss";
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

const sliderImageList = [
    "https://images.pexels.com/photos/2229490/pexels-photo-2229490.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&dpr=1",
    "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&dpr=1",
    "https://images.pexels.com/photos/70845/girl-model-pretty-portrait-70845.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&dpr=1",
    "https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&dpr=1",
    "https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&dpr=1"
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
                <img src={sliderImageList[0]} alt="" />
                <img src={sliderImageList[1]} alt="" />
                <img src={sliderImageList[2]} alt="" />
                <img src={sliderImageList[3]} alt="" />
                <img src={sliderImageList[4]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={previousSlide}><ArrowBackIosNewSharpIcon /></div>
                <div className="icon" onClick={nextSlide}><ArrowForwardIosSharpIcon /></div>
            </div>
        </div>
    )
}

export default Slider
