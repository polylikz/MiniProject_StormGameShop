import React, { useState } from "react";

//JSX Code


function Card(props) {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
  };

    return (
            <div className="card">
                <h2>{props.name}</h2>
                <img src={props.src} alt={props.alt} />
                <div class="content">
                        <p>{props.des}</p>
                        <a href={props.link}>{props.link}</a>
                </div>
                            {addedToCart ? (
                              <p2>เพิ่มเกมในตะกร้าแล้ว</p2>
                            ) : (
                              <button type="button" onClick={handleAddToCart}>Add to Cart</button>
                            )}

            </div>
    );
  }

export default Card;
