import { Outlet,Link } from "react-router-dom";

export default function ApplicationLayout(){
    return(
        <div>
            <h1>Başlık</h1> 
           
            <Link to= "/" className="btn btn-danger mb-2 w-25" >Eve git</Link> <br />
            <Link to="source" className="btn btn-info mb-1 w-25">Kaynak</Link> 
            <Outlet/>
            <h2 className="bg-warning mt-2">Ayaklık</h2>
               
            
        </div>
    )
}