import { ReactComponent as Logo } from 'img/home-ilustration.svg'
import React from 'react'

const Hero = ({title, titleTwo, description, img, button}) => {
    return (
        <div className="hero">
            <div className="mt-5">
                <div className="d-flex hero__section">
                    <Logo fill="#5fb1d2" className="hero__img"/>
                    {/* <img src={img} alt="hero_img" className="hero__img"/> */}
                
                    <div className="hero__info">
                        <h1 className="hero__title" >
                            {title} 
                            <br />
                            {titleTwo}
                        </h1>
                        <p className="hero__description mb-2">{description}</p>
                        <a href="#" className="hero__button mt-3">{button}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
