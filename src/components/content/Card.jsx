import React from 'react'
import productStile from './card.module.css'


function Card(props) {
    return (
        <div className={productStile.cardOptions}>
            <div  className={productStile.imgStyle} >
                <img className={productStile.img} src={props.img} alt="" />
            </div>
            <div className={productStile.price}>
                <h3>{props.price}</h3>
                <strike className={productStile.h5}>
                    {props.discount}</strike>
            </div>
            <h4 className={productStile.h4}>{props.name}</h4>
            <button className={productStile.buttonStyle} >{props.button}</button>
        </div>

    )
}

export default Card