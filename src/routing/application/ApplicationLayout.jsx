import { Outlet,Link } from "react-router-dom";

export default function ApplicationLayout(){
    return(
        <div>
            <h1>Başlık</h1> 
            <Link to="source" className="btn btn-info mb-1 w-50">Kaynak</Link> <br />
            <Link to= "/" className="btn btn-danger mb-2 w-50" >Eve git</Link>
            <Outlet/>
            <h2 className="bg-warning mt-2">Ayaklık</h2>
               
            
        </div>
    )
}