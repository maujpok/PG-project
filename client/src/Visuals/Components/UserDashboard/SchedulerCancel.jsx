import React, { useState} from "react";
import { deleteSchedulebyId, getSchedulesById } from "../../../ApiReq/schedule";
import Swal from 'sweetalert2';

export default function SchedulerCancel ({userId}){
    const [day, setDay]= useState("Todos")
    const [month, setMonth]= useState("Todos")
    const [app, setApp]=useState([])

    const dateJoin= (date)=>{
        return date.dayName+", "+date.dayNumber+" de "+date.month+" "+date.year+" "+date.time
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
    const filter= (sched)=>{
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

    async function clickSearch(){ 
        const sched= await getSchedulesById(userId)
        const filteredSched= filter(sched)
        setApp(filteredSched)
        if (filteredSched.length===0){
            return Swal.fire({
                title: '¡No encontrado!',
                text: 'No hay turnos en el rango indicado',
                icon:"error",
                confirmButtonColor: "#FF214F",
                allowOutsideClick:false,
            })
        }
    };


    function handleClick (e){
        const {id}= e.target
        return Swal.fire({
            title: "¿Está seguro de borrar este turno?",
            icon:"warning",
            showCancelButton: true,
            confirmButtonText: "Si, estoy seguro",
            cancelButtonText: "No, mejor lo mantengo"
        }).then((result) => {
            if(result['isConfirmed']) {
                deleteSchedulebyId(id)
                setApp(app.filter(e=>e._id !== id))
                return new Swal({title:"Eliminado con éxito",icon:"success"})
            }
        })
    };

    return (
        <div className="padd-lg">
            <div className='padd-md font-main text-bold text-center- font-xl border-bottom-color-main'>
                Quitar turno
            </div>
            <div className='padd-md font-lg'>
                Si necesitas eliminar de tu agenda un turno en particular, puedes filtrar por día y/o mes y eliminar el turno correspondiente
            </div>
            <div className="wrapper padd-md flex-center-xl-lg" data-uk-height-match=".normalize"> 
                <div className="col-1-8@xl col-1-6@lg col-1-3@md col-1-1@sm col-1-1@xs padd-md">
                    {/*<label htmlFor="days" className="mr-2">Día:</label>*/}
                    <div className="flex-center-left normalize">Seleccione la fecha</div>
                </div>
                <div className="col-3-8@xl col-2-6@lg col-1-3@md col-1-1@sm col-1-1@xs padd-md">
                    {/* <label htmlFor="month" className="mx-2">Mes:</label> */}
                    <select id="days" onChange={selectDay} className="uk-select border-radius-sm normalize">
                        <option readOnly> Seleccione un día </option>
                        <option value="Todos"> Todos </option>
                        {days.map(d=>{
                            return <option value={d} key={days.indexOf(d)}>{d}</option>
                        })}
                    </select>
                </div>
                <div className="col-3-8@xl col-2-6@lg col-1-3@md col-1-1@sm col-1-1@xs padd-md">
                    {/* <label htmlFor="month" className="mx-2">Mes:</label> */}
                    <select id="month" onChange={selectMonth} className="uk-select border-radius-sm normalize">
                        <option readOnly>Seleccione un mes</option>
                        <option value="Todos">Todos</option>
                        {
                            months.map(m=>{
                                return <option value={m} key={months.indexOf(m)}>{m}</option>
                            })
                        }
                    </select>
                </div>
                <div className="col-1-8@xl col-1-6@lg col-1-1@md col-1-1@sm col-1-1@xs padd-md">
                    <button onClick={clickSearch} className="width-100 padd-md border-radius-sm action action-add-post normalize">
                        Buscar
                    </button>
                </div>
            </div>
            <div className="wrapper padd-md">
                <ul>
                    {
                        app.length>0 ?
                        app.slice(0, 4).map((elem, index)=>{
                            return <li key={index}>
                                <div className="col-1-3@xl col-1-2@lg col-1-1@md col-1-1@sm col-1-1@xs padd-md">
                                    <div className='bg-color-extra4-a20 padd-lg border-color-dark-a20 border-radius-sm flex-bar'>
                                        <div>
                                            <span className="element-xl-lg-md">{dateJoin(elem.date)}</span>
                                            <span className="element-sm-xs padd-md-r font-sm">{dateJoin(elem.date)}</span>
                                        </div>  
                                        <span>
                                            <button
                                                id={elem._id}
                                                name={dateJoin(elem.date)}
                                                onClick={handleClick}
                                                className="padd-md-tb padd-lg-lr font-sm border-radius-sm action action-user-dashboard-cancel">
                                                Borrar
                                            </button> 
                                        </span>                           
                                    </div>
                                </div>
                            </li>
                        })
                        : null
                    }
                </ul>
            </div>
        </div>
    )
}
