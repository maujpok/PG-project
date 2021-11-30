import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { setAvailability } from '../../../ApiReq/schedule';
import { removeFromCart } from '../../../Controllers/actions/cartActions';

//NO TOCAR CARRITO POR AHORA

function RomoveFromCartBtn({date}) {
    const dispatch = useDispatch();

    const userOnPage = useSelector(state=>state.sessionReducer.status);
    const {token} = userOnPage; 

    const handleSubmit = () => {
        dispatch(removeFromCart(date,token));
        return
    }
    return (
        <div>
            <button 
                onClick={handleSubmit} 
                className="bg-white w-2 flex justify-center items-center h-7 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >X
            </button>

        </div>
    )
}

export default RomoveFromCartBtn;
