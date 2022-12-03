import { useState, useEffect } from "react"
export default function DashBoard({}) {
    useEffect(()=>console.log(hospitals), [])
const [hospitals, setHospitals] = useState([
    {
        date : '05 Nov',
        name: 'Hospital 1'
    },{
        date : '01 Nov',
        name: 'Hospital 2'
    },
    {
        date : '03 Dec',
        name: 'Hospital 3'
    }
])
return (
    <main>
        <div className="card1">
            
            <h6>Time</h6>
            <h3>Hospital Name</h3>
            <div className="button">View</div>
        </div>
    </main>
)
}