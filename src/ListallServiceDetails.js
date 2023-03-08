import './Image.css'
export const ListallbServiceDetails=()=>
{
    return(
                <>
                <div className="Container mt-5 bg-warning " >
                    <div className="row justify-content-center">
                                <div className="table-responsive-md">
                                    <table className="col-lg-6 col-md-10 col-sm-12 table table-striped  p-4 shadow rounded">
                                        <thead id="texting">
                                            <tr>
                                                <th>bikeJobcardno</th>
                                                <th>bikeIssues</th>
                                                <th>bikeDateofservice</th>
                                                <th>bikeKilometer</th>
                                                <th>bikeStatus</th>
                                                <th>bikeTypeofservice</th>
                                                <th>bikeEstimatecharge</th>  
                                                <th>bikeNewproductcost</th>
                                                <th>bikeLabourcharge</th>
                                                <th>bikeFinalpay</th>
                                                <th>Performance</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                </div>
                </>
            );
}