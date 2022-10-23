import React from 'react';
import "./CardHome.scss";

const CardHome = (props) => {
    const item = props.product;

    return (
        <div>
            <div className="cardhome_container">
            <img className="image" src={item.img} />
                {/* <h4>{item.name}</h4> */}
            </div>
        </div>
    );
};

export default CardHome;