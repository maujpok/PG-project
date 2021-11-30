import React, { useEffect, useState } from "react";
import Textarea from "@material-tailwind/react/Textarea";
import Input from "@material-tailwind/react/Input";
import Swal from "sweetalert2";
import { postContactForm } from "../../ApiReq/contactForm";

export default function ContactForm(){

    useEffect(() => {
        window.scrollTo(0,0)
    }, []);

    const [input, setInput] = useState({name:"", email:"", phone:"", message:"", thematic:""});
    const [error, setError] = useState({});

    function handleChange({ target }) {

        const {name, value} = target;

        setInput({...input, [name]: value})

        if (name === "name" && value.length > 0) {
            if (!nameRegEx.test(value)) {
                return setError({ ...error, name: "Ingresa un nombre válido" });
            } else setError({})
        }
        if (name === "email" && value.length > 0) {
            if (!emailRegEx.test(value)) {
                return setError({ ...error, email: "Ingresa un email válido" });
            } else setError({});
        }
        if (name === "phone" && value.length > 0)  {
            setInput({...input, phone: value})
            if (!phoneRegEx.test(value)) {
                setError({ ...error, phone: "Ingresa un teléfono válido" });
            }  else setError({});
        }
        if (name === "message" && value.length > 0) {
            setError({})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!input.hasOwnProperty("thematic")) {
            return new Swal({
                title:"Error",
                text:"Debes informar la temática de tu consulta",
                icon:"warning",
                confirmButtonText:"Ok",
                confirmButtonColor:"green"
            })
        }
        if(!input.message) {
            return setError({...error, message:"No olvides escribir tu consulta"})
        }
        if (Object.entries(error).length === 0) {
            postContactForm(input)
            return new Swal({
                title:"¡Gracias!",
                text:"Hemos recibido tu consulta",
                width:"30vh",
                icon:"success",
                confirmButtonText:"Ok",
                confirmButtonColor:"green"
            }).then(() => {
                window.location.href = '/'
            })
        }

    }

    return (
        <React.Fragment>
            <div className="wrapper bg-professional-title">
                <div className="wrapper padd-lg bg-color-light-a80">
                    <section>
                        <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs">
                            <div className='font-main'>
                                <span className="padd-md-b padd-lg-r text-bold font-2x border-bottom-color-main">
                                    Contacto
                                </span>
                                <div className="mrg-sm-t font-lg">
                                    Dejanos tu comentario o sugerencia y te responderemos a la brevedad
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className="wrapper">
                <div className="wrapper padd-lg">
                    <section>
                        <div style={divStyle}>
                            <div>
                                <div style={{marginBottom:"1rem"}}>
                                <label style={labelStyle}>Completa el formulario</label>
                                </div>
                                
                                <form onSubmit={handleSubmit}>
                                    <div style={inputStyle}>
                                        <Input
                                        name="name"
                                        value={input.name}
                                        type="text"
                                        color="pink"
                                        size="sm"
                                        outline={false}
                                        placeholder="Ingresa tu nombre"
                                        onChange={e => handleChange(e)}
                                        autoComplete="none"
                                        required
                                        />
                                        {error.name &&
                                        <span style={danger}>{error.name}</span>
                                        }
                                    </div>

                                    <div style={inputStyle}>
                                        <Input
                                        name="email"
                                        value={input.email}
                                        type="text"
                                        color="pink"
                                        size="sm"
                                        outline={false}
                                        placeholder="Ingresa tu email"
                                        onChange={e => handleChange(e)}
                                        autoComplete="none"
                                        required
                                        />
                                        {error.email &&
                                        <span style={danger}>{error.email}</span>
                                        }                                        
                                    </div>

                                    <div style={inputStyle}>
                                        <Input
                                        name="phone"
                                        value={input.phone}
                                        type="text"
                                        color="pink"
                                        size="sm"
                                        outline={false}
                                        autoComplete="on"
                                        placeholder="Ingresa tu teléfono (opcional)"
                                        onChange={e => handleChange(e)}
                                        />
                                        {error.phone &&
                                        <span style={danger}>{error.phone}</span>
                                        }                                        
                                    </div>

                                    <div>
                                        <label>Selecciona una temática para tu consulta</label>
                                        <select
                                        name="thematic"
                                        onChange={e => handleChange(e)}
                                        style={selectStyle}
                                        >
                                            {
                                                temathics.map((e,i) => (
                                                    <option key={i} value={e}>{e}</option>
                                                ))
                                            }
                                        </select>
                                    </div>

                                    
                                    <Textarea
                                    name="message"
                                    value={input.message}
                                    color="pink"
                                    size="regular"
                                    outline={true}
                                    placeholder="Escribe tu consulta o sugerencia..."
                                    onChange={e => handleChange(e)}
                                    />
                                    {
                                        error.message &&
                                        <span style={danger}>{error.message}</span>
                                    }
                                    
                                    <button
                                    className="uk-button uk-button-danger w-full border-radius-sm action action-user-register-submit"
                                    type='submit'
                                    >Enviar datos</button>

                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </React.Fragment>
    )
};

const divStyle = {
    display: "flex",
    padding: "1vh",
    justifyContent: "space-around",
    fontFamily:"Ubuntu"
}

const inputStyle = {
    marginBottom:"1rem",
    borderRadius:"0.5rem"
}

const selectStyle = {
    marginTop:"0.5rem",
    marginBottom:"1.5rem",
    border:"0.5px lightGrey solid",
    minHeight:"2rem",
    borderRadius:"0.25rem"
}

const labelStyle = {
    fontWeight:"bold"
}

// const color = {
//     backgroundColor: "#FF214F",
//     marginTop:"1rem"
// }

const danger = {
    color: "red",
    fontSize:"smaller"
}

const temathics = [
    "Registro",
    "Pagos",
    "Servicios",
    "Inversiones",
    "Otros",
]

const nameRegEx = /^[a-zA-Z ]{2,30}$/;
const emailRegEx = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
const phoneRegEx = /^[0-9]{8,30}$/;