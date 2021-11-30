import React from 'react'
import Button from "@material-tailwind/react/Button";

function PopBtns(props) {

    // const btnActive = `w-48 h-10 mr-4 bg-white rounded-xl duration-700
    //                     hover:bg-green-500 ring-white bg-opacity-5
    //                     ring-4 ring-offset-1 ring-offset-green-500`

    // const btnDisactive = `w-48 h-10 mr-4 bg-white rounded-xl duration-700
    //                     hover:bg-gray-500 ring-white bg-opacity-5
    //                     ring-4 ring-offset-1 ring-offset-gray-500 cursor-not-allowed`

    const textActive = `text-green-500 font-medium tracking-widest 
                        duration-700`
    const textDisactive = `text-gray-500 font-medium tracking-widest 
                            duration-700 cursor-not-allowed`


    return (
        <div>
            <div className='flex justify-around w-96'>
                    <Button color={props.disabled?'gray':'green'}
                            className={props.disabled?'cursor-not-allowed':''}
                            buttonType="outline"
                            size="lg"
                            rounded={false}
                            block={false}
                            iconOnly={false}
                            ripple="dark"
                            disabled={props.disabled}
                            onClick={props.onSuccess}
                        >
                        <span  className={props.disabled?textDisactive:textActive}
                            >{props.textBtn?props.textBtn:'Confirmar'}</span>
                    </Button>
                    <Button color='red'
                            buttonType="outline"
                            size="lg"
                            rounded={false}
                            block={false}
                            iconOnly={false}
                            ripple="dark"
                            onClick={props.onCancel}
                        >
                        <span  className='text-red-500 font-medium tracking-widest
                                        duration-700'
                            >Cancelar</span>
                    </Button>
                </div>
        </div>
    )
}

export default PopBtns
