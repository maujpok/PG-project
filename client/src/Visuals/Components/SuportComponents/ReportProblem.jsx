import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import { sendReport } from '../../../ApiReq/report';

const ReportProblem = () => {

const [report, setReport] = useState('');
const [type, setType]= useState()
const [orderId, setOrderid]= useState()
const [error, setError] = useState(false);

const userId=useSelector(state =>  state.sessionReducer.status.id)

const handleChange = e => {
    setReport(e.target.value);
    setError(false)
}
const handleSubmit = e => {
    e.preventDefault();
    if(report.trim() === ''){
       return setError(true);
    }
    setError(false);
    sendReport({
        reason:type,
        text:report,
        orderId:orderId,
        userId:userId
    })
    setReport('');
    e.target.reset();
    return Swal.fire({
        title: '¡Enviado!',
        text: 'Nos contactaremos contigo',
        icon:'success',
        confirmButtonColor: "#e83454", 
    }
    )
}

const handleChangeSelect= e=>{
    setType(e.target.value)
}

const handleChangeOrder= e=>{
    setOrderid(e.target.value)
}

    return (  
        <div className='m-20'>
            <form onSubmit={handleSubmit}>
            <div className="flex flex-col">

            <span className="leading-loose text-2xl text-center"> Describe tu problema aquí y te contactaremos en breve</span>
            <label htmlFor="reason" className="px-1">Tipo de problema:</label>
            <select id="reason" onChange={handleChangeSelect} required className="my-2 uk-select width-100 border-radius-sm">
                <option value="">- Seleccionar problema -</option>
                <option value="Service">Servicio</option>
                <option value="App">Sitio</option>
                <option value="Payment">Pagos</option>
                <option value="Account">Cuenta</option>
                <option value="Other">Otro</option>
            </select>
            {type==="Payment" ? (<div>
                <label htmlFor="orderId" className="px-1">Número de orden</label>
                <input id="orderId" type="text" onChange={handleChangeOrder} className="my-2 uk-input width-100 border-radius-sm"/>
            </div>) : null}
            <textarea
                className="form-textarea mt-1 block w-full border-2 p-2 border-radius-sm"
                rows="8"
                placeholder="Describe tu problema aquí."
                onChange={handleChange}
                value={report}
                ></textarea>  
            </div>
            {
                error && <p className="uk-alert-danger px-2">La descripción no puede estar vacía</p> 
            }   
            <div className="pt-4 flex items-center space-x-4">
                    <button className="uk-button width-100 border-radius-sm action action-user-register-submit"
                    type='submit'
                    >Crear Reporte</button>
            </div>
            </form>
        </div>
    );
}
 
export default ReportProblem;

//PENDIENTE CONECTAR LA RUTA DEL REPORTE AL BACK