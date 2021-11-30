import React from 'react';
import AddToCartBtn from '../Cart/AddToCartBtn';

function Schedule() {
    let schedule = [{date: "7:00", available: true}, {date: "8:00", available: true}, {date: "17:00", available: true}, {date: "18:00", available: true}, {}]
    
    return (
        <div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th >Hora</th>
                        <th >Add to cart</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="h-6 px-5 m-2">                        
                            {schedule.length && schedule.filter(a => a.available === true).map(a => (<div className="h-6 px-5 m-2">{a.date}</div>))}
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap text-center text-sm font-medium">{schedule.length && schedule.filter(a => a.available === true).map(a => (<AddToCartBtn appointment={a}/>))}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Schedule;
