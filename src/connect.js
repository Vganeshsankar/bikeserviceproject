import axios from "axios";


export const Loginperformance=async(object)=>
{
    const  credentials=object.username+":"+object.password
    const token=btoa(credentials);
    try{
        const t=await axios.get(`http://localhost:8080/mybikeproject/`,{
            headers:{
                "Authorization":`Basic ${token}`
            }
        })
        if(t.data)
        {
            sessionStorage.setItem("auth",token)
            return;
        }
    }
    catch(err)
    {
        alert(err)
    }

}