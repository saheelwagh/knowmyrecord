import { useState, useEffect } from "react"
export default function DashBoard({}) {
    useEffect(()=>console.log(hospitals), [])
const [hospitals, setHospitals] = useState([
    {
        date : '05 Nov 2022',
        name: 'Hospital 1'
    },{
        date : '01 Nov 2022',
        name: 'Hospital 2'
    },
    {
        date : '03 Dec 2022',
        name: 'Hospital 3'
    }
])
return (
    <main className=" grid place-content-center h-screen">
        <h1 className="text-3xl">Your Records</h1>
       <ul>
            <li>
                <span className="text-xl text-red-500 pr-5">New Access Request:</span>
                <button className="text-xl text-blue-500"
                onClick={()=>{/* fetch pending trans from chain*/ }}
                >Click To View</button>
            </li>
            {hospitals.map(hosp=>
            <li className="data-card border-2 border-yellow-300 h-48">
                <div className="text-slate-500 font-bold">{hosp.date}
                </div>
                <div className="text-xl">
                  Accessed by:  {hosp.name}
                </div>
                </li>)}
        </ul>
    </main>
)
}