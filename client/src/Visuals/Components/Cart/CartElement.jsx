import React from "react";
import RemoveFromCartBtn from "../Cart/RomoveFromCartBtn";

export default function CartElement({name, date, sessions, price,id}){
   
    return (
        <div className="grid grid-cols-5 gap-4">
            <p>{name}</p>
            <p>{date}</p>
            <p>{sessions} ({(sessions*30+" min")})</p>
            <p>$ {price}</p>
        <RemoveFromCartBtn
            date={id}
        />
        </div>
    )
}