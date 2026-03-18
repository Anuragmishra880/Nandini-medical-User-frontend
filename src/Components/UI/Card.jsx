// import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
// import { CartContext } from '../Context/CartDetailsContextProvider'


export default function Card({ image, title, price, product }) {
    // const { addToCart } = useContext(CartContext)
    return (
        <div>
            <div className="card"  >
                <img src={image} className="card-img-top" height={250} alt="..." />
                <div className="card-body" >
                    <h5 className="card-title text-center">{title}</h5>
                    <p className="card-text text-center">{price}</p>
                </div>
                    {/* <button className='btn text-light bg-danger w-100' onClick={() => addToCart(product)} >Add to Cart</button> */}
            </div>
        </div>
    )
}
