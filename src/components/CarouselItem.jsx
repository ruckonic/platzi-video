import React from 'react';
import PropTypes from 'prop-types';

import '../assets/styles/components/CarouselItem.scss';

import playIcon from '../assets/static/btn-play.png';
import addIcon from '../assets/static/btn-add.png';


const CarouselItem = ({cover, title, year, contentRating, duration}) => (
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title}/>
        <div className="carousel-item__details">
            <div>
                <img src={playIcon} />
                <img src={addIcon} />
            </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
        </div>
    </div>
);

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number
}

export default CarouselItem;