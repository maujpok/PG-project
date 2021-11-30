import React from 'react'
import { Link } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import {useSelector} from 'react-redux'


function CartIcon() {
    const id = useSelector(state=>state.sessionReducer.status.id)
    const items = useSelector(state=>state.sessionReducer.cart.filter(o=>o.customerId===id).length)
    return (
        <Link to='/carrito'>
            <div className='relative min-w-max flex items-center'>
                {items > 0 && <div className='absolute -top-2 left-3 bg-primary w-4 h-4 text-xs text-white font-bold text-center rounded-full'>{items}</div>}
                <FaShoppingCart className='inline mr-1 w-6 h-6'/>
                <span className='hidden lg:inline'>Carrito</span>
            </div>
        </Link>
    )
}

export default CartIcon
