import star from "../assets/svg/Star_fill.svg"
import React from 'react';
import PropTypes from 'prop-types';
import starEmpty from "../assets/svg/Star.svg"

export function CoffeCard ({ name, image, price, rating, votes, popular, available}) {

    return (
        <div className='coffeeCard'>
      <img className='coffeeCard-img' src={image} />
      <div className='coffeeCard-infoLine'>
        <h2 className='coffeeCard-name'>{name}</h2>
        <span className='coffeeCard-price'>{price}</span>
      </div>
      <div className='coffeeCard-votesLine'>
        <img className='coffeeCard-star' src={rating ? star : starEmpty} />
        <span className='coffeeCard-rating'>
          {rating}
          <span className='coffeeCard-votes'>
            {
              rating ? ` (${votes} votes)` : 'No rating'
            }
          </span>
        </span>
        {
          !available && <p className='coffeeCard-soldOut'>Sold out</p>
        }
      </div>
      {
        popular && <span className='coffeeCard-popular'>Popular</span>
      }
    </div>
    )

}

CoffeCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    popular: PropTypes.bool.isRequired,
    available: PropTypes.bool.isRequired
  }
