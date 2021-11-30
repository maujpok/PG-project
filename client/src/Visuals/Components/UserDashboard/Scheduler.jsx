import React, {useState} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addtoSchedule } from "../../../ApiReq/schedule";

export default function Scheduler({userId, onCancel}){
    
    const [date, setDate] = useState(new Date());
    const [app, setApp] = useState([])
    // const [added, setAdded] = useState(false)
    
    const days={
        Mon:"Lunes",
        Tue:"Martes",
        Wed:"Miercoles",
        Thu:"Jueves",
        Fri:"Viernes",
        Sat:"Sabado"
    }
    
    // const dateToJSON = (date) => {
    //   let dateArray = date.toString().split(" ").slice(0, 6)
    //   console.log(dateArray)
    //   let dateObj = {
    //     dayName: days[dateArray[0]],
    //     month: dateArray[1],
    //     dayNumber: dateArray[2],
    //     year: dateArray[3],
    //     time: dateArray[4],
    //     timeZone: dateArray[5]
    //   }
    //   return dateObj;
    // }

    const showDate = date =>{
        //console.log(dateToJSON(date))
        // console.log(date)
        if(!app){
            setApp([{
                date:date.toString(),
                userId:userId,
                availability:true
            }])
        }
        else if(!app.find(e=>e.date===date.toString())){
            setApp([...app, {
                date:date.toString(),
                userId:userId,
                availability:true
            }]
        )}
    }

    const handleClickmany=()=>{
        alert("Agregado!")
        addtoSchedule(app)
        setApp()
    }
    
    const removeApp=(e)=>{
        setApp(app.filter(d=>d.date!==e.target.name))
    }

    function daySpanish (date) {
        date=date.split(" ").slice(0, 5)
        date[0]= days[date[0]]
        return date.join(" ")
    }
    
    return (
        <div className="flex flex-col justify-center w-full py-4 bg-white shadow-md rounded ">
            <div className="flex justify-center">
                <div className="mr-3">
                <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                showTimeSelect
                className="rounded-sm uk-input mr-3"
                dateFormat="MMMM d, yyyy h:mm aa"
                
                />
                </div>
                <div className="mt-1">
                <button
                type="button"
                value="Mostrar Fecha"
                className="width-120 px-5 font-lg font-main border-radius-sm action action-user-dashboard-edit"
                onClick={() => showDate(date)}
                >Agregar</button>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-center py-4">
                    <ul className="divide-y">
                        {app ? app.map(e=>{
                            return(<li key={app.indexOf(e)} className="flex flex-row justify-between py-2"> 
                                    <p className="text-lg">{daySpanish(e.date)}</p>
                                    <button name={e.date} onClick={removeApp} className="bg-white w-2 flex justify-center items-center h-7 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-2">
                                        X</button>
                                </li>)
                        }) : null}
                    </ul>
                </div><div className="flex justify-center">

                    {app ? (<button className="padd-md border-radius-sm action action-professional mr-4" onClick={handleClickmany}>Confirmar</button>):null}
                    {<button className="padd-md border-radius-sm action action-professional ml-4" onClick={onCancel}>Cancelar</button>}

                </div>
            </div>
        </div>
        
    );
}
