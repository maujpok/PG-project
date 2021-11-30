/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfSchedule } from '../../../Controllers/actions/professionalsActions';
import {Link} from 'react-router-dom';
import { addToCart } from '../../../Controllers/actions/cartActions';
import Swal from 'sweetalert2';



export default function Schedules({id, login, name, lastname, category, cost}) {
    
    const dispatch = useDispatch();
    const token = useSelector(state => state.sessionReducer.status.token);
    
    useEffect(() => {
        dispatch(getProfSchedule(id, token))
    },[]);

    useEffect(() => {
        setTimeout(function() {
            dispatch(getProfSchedule(id, token))
        }, 60000)
    });

    const [day, setDay]= useState("Todos")
    const [month, setMonth]= useState("Todos")
    const [load, setLoad]= useState([])
    const sched= useSelector(state=>state.professionalReducer.profSchedule)
    const carrito= useSelector(state=>state.sessionReducer.cart)
    const customerId= useSelector(state=>state.sessionReducer.status.id)
    
    const price = cost?cost:0.01;

    function handleClick(e) {
        setLoad([...load, e.target.id])
        dispatch(addToCart({
            name:name+" "+lastname,
            appointment:{
            date:e.target.name,
            sessions:1,
            },
            price:price,
            id:e.target.id,
            category:category,
            professionalId:id,
            customerId:customerId
        }))
        return Swal.fire({
            title: '¡Reserva hecha!',
            text: 'En tu carrito podrás abonar tu reserva',
            icon:'success',
            confirmButtonColor: "#FF214F",
            allowOutsideClick:false,
        })
    };
    const dateJoin= (date)=>{
        return date.dayName+", "+date.dayNumber+" de "+date.month+" "+date.year+" "+date.time+" hs"
    }

    const months= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const days= ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

    const selectDay = (e)=>{
        const {value}=e.target
        setDay(value)
    }

    const selectMonth = (e)=>{
        const {value}=e.target
        setMonth(value)
    }
    const filter= ()=>{
        if(day==="Todos" && month==="Todos"){
            return sched
        }
        else if (day!=="Todos" && month!=="Todos"){
            return sched.filter(a => a.date.month===month && a.date.dayName===day)
        }
        else if(day!=="Todos"){
            return sched.filter(a => a.date.dayName===day)
        }
        else if(month!=="Todos"){
            return sched.filter(a => a.date.month===month)
        }
        
    }
    

    return (
        <div className="padd-lg">
        <div className='padd-md-b font-main text-bold text-center- font-xl border-bottom-color-main'>
            Proximos turnos
        </div>
        <div>
        <p className="my-2">Filtrar por: </p>
            <div>
            <label htmlFor="days" className="mr-2">Día:</label>
            <select id="days"onChange={selectDay} className="w-48 uk-input border-radius-sm font-main">
                <option value="Todos">  Todos </option>
                {days.map(d=>{
                    return <option value={d} key={days.indexOf(d)}>{d}</option>
                })}
            </select>
            <label htmlFor="month" className="mx-2">Mes:</label>
            <select id="month" onChange={selectMonth} className="w-48 uk-input border-radius-sm font-main">
                <option value="Todos">  Todos </option>
                {months.map(m=>{
                    return <option value={m} key={months.indexOf(m)}>{m}</option>
                })}
            </select>
            </div>
        </div>
        <ul>
        {
        filter(sched).length>0 ?
        filter(sched).slice(0, 5).map((elem, index)=>{
            
            return  <li className='bg-color-extra4-a20 mrg-lg-t padd-lg border-color-dark-a20 border-radius-sm' 
                    key={index}
                    >   {login.length ? 
                        <div>
                            {dateJoin(elem.date)}  { carrito.find(e=>e.id===elem._id) ||  load.find(e=>e===elem._id)? 
                                <p className="w-full py-2 text-center">En carrito</p> 
                                        : 
                                <button disabled={id===customerId} id={elem._id} name={dateJoin(elem.date)} onClick={handleClick} className={id===customerId?'hidden':"padd-sm mt-1 border-radius-sm font-sm action action-add-post w-full"}>Contratar</button>
                            
                            }
                        </div>
                            : 
                        <div>
                            {dateJoin(elem.date)}
                            <Link to='/ingresar'>
                                <button className="padd-sm mt-1 border-radius-sm font-sm w-full action action-user-register-submit">
                                <span>Inicia sesion para reservar</span>
                                </button>
                            </Link>
                        </div>
                        }
                    </li>
        })
        : <p className="py-4">Sin turnos disponibles</p>
        }
        </ul>
    </div>
    )
};
