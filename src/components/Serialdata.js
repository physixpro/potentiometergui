import React, { useState, useEffect, useReducer } from 'react';
import axios from "axios";

const Serialdata = () => {

    const [readings, setReadings] = useState([])

    useEffect(() => {
        const incomingReading = async () => {
            const res = await axios.get("http://localhost:3001/");
            console.log(res , "HERE IS OUR INCOMING DATA")
            //  const readings = res.data;
            setReadings(res.data);
           
         
        };
        incomingReading();
        // console.log(incomingReading)
    }, [])






    // const[current,setCurrent]=useState([]);
    // const[resistance,setResistance]=useState([]);
    // const[degreesC,setDegreesC]=useState([]);
    // const[degressF,setDegreesF]=useState([]);



    return (
        <div>
            <header className="App-header">
                HFENGINE <br /> DASHBOARD
            </header>
            {
                readings.readings?.map((reading) => (

                    <div key={reading.name}>
                        <p>{reading.status}</p>
                        <p>{reading.throttle}</p>
                        <p>{reading.RPM}</p>
                        <p>{reading.fuelConsumption}</p>
                        <p>{reading.enable}</p>
                        <p>{reading.CHT}</p>
                        <p>{reading.baro}</p>
                        <p>{reading.MAP}</p>
                        <p>{reading.MAT}</p>
                        <p>{reading.fuelPressure}</p>
                        <p>{reading.engineRunTime}</p>
                        <p>{reading.engVoltage}</p>
                        <p>{reading.chargeTemp}</p>
                        <p>{reading.injDuty}</p>
                        <p>{reading.fuelUsedRate}</p>

                    </div>
                    // <ul key={voltage.id}>
                    //     <li>{voltage.title}</li>

                    // </ul>
                ))
            }
        </div>
    )
};

export default Serialdata;