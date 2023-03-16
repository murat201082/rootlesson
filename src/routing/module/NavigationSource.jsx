import {Link} from "react-router-dom"
export default function NavigationSource(){

    return (
        <div className="bg-secondary">
       
            <Link to= "/target" className="btn btn-warning m-1 w-25" >Hedefe Git</Link> <br />
            <Link to= "/target/301" className="btn btn-danger mb-3 w-25" >Ereğe Değişkenle Git</Link> <br />
            <Link to= "/mui" className="btn btn-danger mb-3 w-25" >Mui Git</Link>
            
        </div>
    )
}