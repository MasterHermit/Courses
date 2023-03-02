import React from 'react'
import "./Card.css"

const Card = () => {
  return (
    <div className="wrapper">
      <div className="cards_wrap">
        <div className="card_item">
          <div className="card_inner">
            <div className="card_top">
              <img src="https://images.unsplash.com/photo-1562307534-a03738d2a81a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="card image" />
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