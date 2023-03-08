import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { read } from './BikeDetailValues'
export const Reading=(myvalue)=>  
{
    const[bikevalue,setBikevalue]=useState({
        "cusId":"",
        "cusName":"",
        "cusContact":0,
        "cusEmail":"",
        "cusDate":""
    })
    useEffect(()=>
        {
            callreading()
        })

    const callreading=()=>
    {
        setBikevalue(read(myvalue.who))
    }
    return(
        <>
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="card  bg-info col-lg-5 col-md-8 col-sm-12">
                    <div className="card-title">
                        {bikevalue.cusName}
                    </div>
                    <div className="card-body">
                        <p>{bikevalue.cusId}</p>
                        <p>{bikevalue.cusContact}</p>
                        <p>{bikevalue.cusEmail}</p>
                        <p>{bikevalue.cusDate}</p>
                    </div>

                </div>

            </div>

        </div>
        </>
    )
}