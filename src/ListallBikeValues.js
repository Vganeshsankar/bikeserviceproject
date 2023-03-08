import { useEffect, useState } from 'react';
import { DisplayAllbikevalues } from './connect';
import './Image.css'
export const ListallbikeDetails=()=>
{
    const[allvalues,setAllvalues]=useState([])

    const myvalues=async()=>
    {
        const t=await DisplayAllbikevalues();
        setAllvalues(t.data);
    }

    useEffect(
        ()=>
        {
            myvalues()
        }
    )


    return(
                <>
                <div className="Container mt-5 bg-warning" >
                    <div className="row justify-content-center">
                                <div className="table-responsive-md">
                                    <table className="col-lg-8 col-md-10 col-sm-12 table table-striped  p-4 shadow rounded">
                                        <thead id="texting">
                                            <tr>
                                                <th>customerId</th>
                                                <th>customerBikeNo</th>
                                                <th>CustomerName</th>
                                                <th>CustomerContact Number</th>
                                                <th>CustomerEmail Id</th>
                                                <th>Dateofpurchase</th>  
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                                allvalues.map((data)=>(
                                                    <tr>
                                                        <td>
                                                            <a href={`reading/${data.cusId}`} className="btn btn-outline-primary">{data.cusId}</a>
                                                        </td>
                                                        <td>{data.cusBikeno}</td>
                                                        <td>{data.cusName}</td>
                                                        <td>{data.cusContactno}</td>
                                                        <td>{data.cusEmail}</td>
                                                        <td>{data.cusDateofpurchase}</td>
                                                        <td>
                                                        <a href={`updating/${data.cusId}`} className="btn btn-outline-primary">
                                                            Update</a>
                                                            <button className="btn btn-outline-danger"// onClick={
                                                                // async()=>
                                                                // {
                                                                //     const t=await delete();
                                                                //     alert(t);
                                                                //     navigator("/listallbikedetails")
                                                                // }
                                                            // }>
                                                            >
                                                                delete
                                                            </button>
                                                        </td>
                                                    </tr>

                                                ))
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                </div>
                </>
            );
}