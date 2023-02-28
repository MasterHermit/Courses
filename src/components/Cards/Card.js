import React from 'react'
import "./Card.css"

const Card = () => {
    return (
  <div className="wrapper">
  <div className="cards_wrap">
    <div className="card_item">
      <div className="card_inner">
        <div className="card_top">
          <img src="React.png" alt="card image" />
        </div>
        <div className="card_bottom">
          <div className="card_category">
            React
          </div>
          <div className="card_info">
            <p className="title">
              The Complete guide to learn advance React
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              sdog9eqrgsdgkjqdm sadgjjqjrg sp asdgjoiq0gas  adgjdfk;j asdfjlksjdf 
              sdfkjasld sldkfoasosd
            </p>
          </div>
          <div className="card_creator">
            By Sriti Rout
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    );
};

export default Card;