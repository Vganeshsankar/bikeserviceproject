import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { readonebikevalue } from './connect';
// import { read } from './BikeDetailValues'
// export const Reading=(myvalue)=>  
{
    // const[bikevalue,setBikevalue]=useState({
    //     "cusId":"",
    //     "cusName":"",
    //     "cusContact":0,
    //     "cusEmail":"",
    //     "cusDate":""
    // })
    const {myid}=useParams();
    const [bikevalue,setBikevalue]=useState({})
    useEffect(()=>
        {
            callreading()
        })

    const callreading=async()=>
    {
        // setBikevalue(read(myvalue.who))
        const t=await readonebikevalue(myid);
        setBikevalue(t.data);
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