import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import { addtoSchedule } from "../../../ApiReq/schedule";
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';

export default function SchedulerRecurrent ({userId}){
    const days= ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
    const deng= {Lunes: "Mon", Martes:"Tue", Miercoles:"Wed", Jueves:"Thu", Viernes:"Fri", Sabado:"Sat", Domingo:"Sun"}

    const [daystime, setDt]= useState({Mon:[], Tue:[], Wed:[], Thu:[], Fri:[], Sat:[], Sun:[]})
    
    const onChangeTime=(date)=>{
        const hour = date.toString().split(" ")[4].slice(0,5)
        const day= date.toString().split(" ")[0]
        if(!daystime[day].find(e=>e===hour)){
            setDt({...daystime, 
            [day]: [...daystime[day], hour]})
        }
    };

    const handleClick= ()=>{
        const app=[]
        for (let key in daystime){
            daystime[key].forEach(t=> app.push(date(key, t, userId)))
        }
        let app1= app.flat()

        if(app1.length===0){
            return Swal.fire({
                title: '¡Error!',
                text: 'Debes agregar tus turnos',
                icon:'warning',
                confirmButtonColor: "#FF214F",
                allowOutsideClick:false,
            })
        }
        addtoSchedule(app1)
        setDt({Mon:[], Tue:[], Wed:[], Thu:[], Fri:[], Sat:[], Sun:[]});
        
        return Swal.fire({
                title: '¡Realizado exitosamente!',
                text: 'Turnos agregados a tu agenda',
                icon:'success',
                confirmButtonColor: "#FF214F",
                allowOutsideClick:false,
            })
    };
    
    const handleClickFilt= (e)=>{
        const {name, value}= e.target
        setDt({...daystime,
            [name]: daystime[name].filter(t=>t!==value)})
    };

    return (
    <div>
        <div className='padd-md font-main text-bold text-center- font-xl border-bottom-color-main'>
            Configura tu agenda
        </div>
        <div className='padd-md font-lg'>
            Aquí puedes configurar tus turnos. Selecciona los horarios según cada día de la semana y presiona "Confirmar" para agregar los turnos a tu agenda.
        </div>
        <div className="wrapper mrg-md-t" data-uk-height-match=".normalize">
        {
            days.map((d)=>{
                return (   
                    <div key={days.indexOf(d)} className="col-1-7@xl col-1-7@lg col-1-4@md col-1-2@sm col-1-1@xs padd-md">
                        <div className="bg-color-extra4-a20 border-color-dark-a20 border-radius-sm overflow-hidden normalize">
                            <div className="bg-color-primary padd-md text-bold text-center font-color-light font-lg">
                                {d}
                            </div> 
                            <div className="mrg-lg-t padd-lg-lr">
                                <DatePicker
                                    selected={new Date(2021,1,days.indexOf(d)+1, 8)}
                                    onChange={(date) => onChangeTime(date)}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    className="width-100 padd-md text-center border-radius-sm action action-schedule"
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
                                />
                            </div>
                            <ul className="padd-lg-b">
                                {
                                    daystime[deng[d]].map(e=>{
                                        return (
                                            <li className="mrg-lg-t padd-lg-lr" key={daystime[deng[d]].indexOf(e)}>
                                                <div className="padd-md bg-color-light border-color-dark-a20 border-radius-sm flex-center">
                                                    {e}&emsp;
                                                    <button
                                                        className="icon-sm font-main font-xs border-radius-xl flex-center action action-user-dashboard-cancel"
                                                        onClick={handleClickFilt} name={deng[d]} value={e}
                                                    >
                                                        &#10006;
                                                    </button>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                )
            })
        }
        </div>
        <div className="wrapper padd-md flex-center">
            <div className="mrg-lg-t col-1-3@xl col-1-3@lg col-1-2@md col-1-1@sm col-1-1@xs">
                <button
                    onClick={handleClick}
                    className="width-100 padd-md-tb padd-lg-lr border-radius-sm action action-success"
                >
                    Confirmar
                </button>
            </div>
        </div>
        <p className="sm-xs-element">&nbsp;</p>
    </div>
  )
}


function date (day, time, userId) {
    const dnum= {
      Sun:0, Mon:1, Tue:2, Wed:3, Thu:4, Fri:5, Sat:6
    }
    let a= new Date()
    let d = new Date(),
    year = d.getYear(),
    days = [];
    d.setDate(dnum[day]);
    const months= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    // Get all the other Mondays in the month
    while (d.getYear() === year) {
        var pushDate = new Date(d.getTime());
        if(a.getMonth()=== pushDate.getMonth() && a.getDate()<pushDate.getDate()){
          days.push({date: day + " "+ months[(pushDate.getMonth())] + " " + ('0' + pushDate.getDate()).slice(-2) + " " + pushDate.getFullYear() + " " +time,
                    userId:userId,
                    availavility:true
        });
        }
        else if (a.getMonth() !== pushDate.getMonth()){
          days.push({date: day + " "+ months[(pushDate.getMonth())] + " " + ('0' + pushDate.getDate()).slice(-2) + " " + pushDate.getFullYear() + " " +time,
                    userId:userId,
                    availavility:true
                    });
        }
        d.setDate(d.getDate() + 7);
    }
    return days
  }
